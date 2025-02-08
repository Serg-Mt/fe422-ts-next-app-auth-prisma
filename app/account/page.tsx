import { auth } from '@/auth';
import { MyAccount, ServerSession } from '@/components/my-account';

export default async function Page() {
  const
    responce = await fetch('http://localhost:3000/api/myaccount/'),
    obj = await responce.json(),
    session = await auth();
  return <>
    <h1>My account</h1>
    RSC session = {JSON.stringify(session)}
    <hr />
    server session = <ServerSession />
    <hr />
    fetch from RSC result = {JSON.stringify(obj)} тут будет NULL
  </>
}