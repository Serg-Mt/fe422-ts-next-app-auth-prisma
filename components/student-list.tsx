import { StudentAPIRecord } from '@/app/api/student/route'



export function StudentsList({ students }: { students: StudentAPIRecord[] }) {
  return <table>
    <thead>
      <tr>
        <td>id</td>
        <td>name</td>
        <td>surname</td>
        <td>age</td>
        <td>house</td>
      </tr>
    </thead>
    <tbody>
      {students.map(({ id, name, surname, age, house }) => <tr key={id}>
        <th>{id}</th>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{age}</td>
        <td>{house?.name}</td>
      </tr>)}
    </tbody>
  </table>
}