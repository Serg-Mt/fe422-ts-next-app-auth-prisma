import { signIn, signOut, auth } from "@/auth"
import { AccountInfo } from './account-info';

export async function ServerComponentAccountButton() {
  const session = await auth();
  return <AccountInfo session={session} SignInButton={SignInForm} SignOutButton={SignOutForm} />
}



export function SignInForm() {
  return <form
    action={async () => {
      "use server"
      await signIn()
    }}
  >
    <button type="submit">Sign in</button>
  </form>

}

export function SignOutForm() {
  return <form
    action={async () => {
      "use server"
      await signOut()
    }}
  >
    <button type="submit">Sign Out</button>
  </form>

}