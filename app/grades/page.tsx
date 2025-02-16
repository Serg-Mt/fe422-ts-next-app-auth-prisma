import { GetGrades } from '@/components/get-grades';
import { auth } from '@/auth';
import { getRole } from '@/lib/role';
export default async function Page() {
  const 
    session = await auth(),
    role = await getRole(session);
  return <>
    <h1>Grades</h1>
    <GetGrades role={role} />
  </>;
}