import type { Student } from '@prisma/client'

export function StudentsList({ students }: { students: Student[] }) {
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
      {students.map(({ id, name, surname, age, groupId }) => <tr key={id}>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{age}</td>
        <td>{groupId}</td>
      </tr>)}
    </tbody>
  </table>
}