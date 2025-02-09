import { signIn, signOut, useSession } from 'next-auth/react';
import { AccountInfo } from './account-info';
import { Spinner } from './spinner';



export function ClientComponentAccountButton() {
  const { data: session, status } = useSession();
  if('loading'===status)
    return <Spinner/>
  return <AccountInfo
    session={session}
    SignInButton={SignInButton}
    SignOutButton={SignOutButton}
  />
}



function SignOutButton () {
  return <button onClick={() => signOut()}>Sign out</button>;
}

function SignInButton() {
  return <button onClick={() => signIn()}>Sign in</button>;
}


