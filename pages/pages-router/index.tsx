import { signIn, signOut, useSession } from 'next-auth/react';


export default function Page() {
  return <>
    <h2>Custom page-router page </h2>
    <Account />
  </>;
}

function Account() {
  const { data: session } = useSession();
  console.debug('session=', session);
  if (session) {
    // const {user} = session;
    return (
      <>
        Signed in as {session.user?.name} ({session.user?.email}) <br />
        {session.user?.image && <img src={session.user?.image} style={{ width: '50px', borderRadius: '50%' }} />}<br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return <>
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
  </>

}