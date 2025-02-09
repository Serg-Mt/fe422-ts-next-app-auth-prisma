import { signIn, signOut, useSession } from 'next-auth/react';
import { AccountInfo } from './account-info';


export function ClientComponentAccountButton() {
  const { data: session } = useSession();
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


