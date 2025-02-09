import { signIn, signOut, auth } from "@/auth"
import { AccountInfo } from './account-info';

export async function ServerComponentAccountButton() {
  const session = await auth();
  return <AccountInfo session={session} SignInButton={SignInButton} SignOutButton={SignOutButton} />
}



export function SignInButton() {
  return <form
    action={async () => {
      "use server"
      await signIn()
    }}
  >
    <button type="submit">Sign in</button>
  </form>

}

export function SignOutButton() {
  return <form
    action={async () => {
      "use server"
      await signOut()
    }}
  >
    <button type="submit">Sign Out</button>
  </form>

}