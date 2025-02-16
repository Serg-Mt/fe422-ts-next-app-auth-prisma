"use client";

import { DemoGrades } from './demo-grades';
import { use, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getRole } from '@/lib/role';
import { GradesStudent } from './grades-student';
import { GradesTeacher } from './grades-teacher';

async function fetcher(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}

export function GetGrades({ role }) {
  console.log('GetGrades role=', role);
  const
    [error, setError] = useState(null),
    [grades, setGrades] = useState(null),
    [students, setStudents] = useState(null),
    [teachers, setTeachers] = useState(null),
    [loading, setLoading] = useState(true),
    [needReload, setNeedReload] = useState(0);
  // session = useSession(),
  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        const result = await Promise.all(
          [fetcher('/api/grade'),
          fetcher('/api/student'),
          fetcher('/api/teacher')]);

        setGrades(result[0]);
        setStudents(result[1]);
        setTeachers(result[2]);
        setError(null);
        setLoading(false);
      } catch (error) {
        console.error('error=', error);
        setError(error);
      }
    }
  }, [needReload]);

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  console.log({ grades, students, teachers });
  return <>
    <DemoGrades grades={grades} students={students} teachers={teachers} />
    {'student' === role && <GradesStudent grades={grades} students={students} teachers={teachers} />}
    {'teacher' === role && <GradesTeacher grades={grades} students={students} needReload={() => setNeedReload(x => 1 + x)} />}
  </>
}
