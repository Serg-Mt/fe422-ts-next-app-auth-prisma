import { StudentAPIRecord } from '@/app/api/student/route'



export function StudentsList({ students }: { students: StudentAPIRecord[] }) {
  return <table>
    <thead>
      <tr>
        <td>name</td>
        <td>surname</td>
        <td>age</td>
        <td>group</td>
      </tr>
    </thead>
    <tbody>
      {students.map(({ id, name, surname, age, group }) => <tr key={id}>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{age}</td>
        <td>{group?.name}</td>
      </tr>)}
    </tbody>
  </table>
}