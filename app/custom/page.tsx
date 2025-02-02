import { signIn, signOut, auth } from "@/auth"

export default function Page1() {
  return <>
    <h2>Custom page </h2>;
    <Account />
  </>
}

async function Account() {
  const session = await auth();

  if (session?.user) {
    // const {user} = session;
    return (
      <>
        Signed in as {session.user?.name} ({session.user?.email}) <br />
        {session.user?.image && <img src={session.user?.image} style={{ width: '50px', borderRadius: '50%' }} />}<br />
        <SignOut />
      </>
    )
  }
  return <>
    <SignIn />
  </>

}


function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  )
}

function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}