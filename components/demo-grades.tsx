import type { Grade } from '@prisma/client';
export function DemoGrades({ grades }: { grades: Grade[] }) {
  return <div>
    <h1>Grades</h1>
    <table>
      <thead>
        <tr>
          <th>Student</th>
          <th>Point</th>
          <th>Teacher</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {grades.map(grade => <tr key={grade.id}>
          <td>{grade.studentId}</td>
          <td>{grade.point}</td>
          <td>{grade.teacherId}</td>
          <td>{grade?.date?.toString?.()}</td>
        </tr>)}
      </tbody>
    </table>
  </div>;
}