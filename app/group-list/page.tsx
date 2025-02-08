import { GroupList } from '@/components/group-list';


export default async function Page() {
  const
    responce = await fetch('http://localhost:3000/api/group/'),
    groups = await responce.json();

  return <GroupList groups={groups} />
}