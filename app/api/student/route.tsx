import { auth } from '@/auth';
import { getRole } from '@/lib/role';
import { prisma } from '@/prisma/prisma';
import type { Prisma } from '@prisma/client';

import { /* type NextRequest, */ NextResponse } from 'next/server'

const
  findManyArg = { include: { house: { select: { name: true } } } };
export type StudentAPIRecord = Prisma.StudentGetPayload<typeof findManyArg>

// общедоступное API
export async function GET(/* request: NextRequest */) {
  // console.log('request=', request);
  const
    session = await auth(),
    role = await getRole(session),
    userId = session?.user?.id;
  switch (role) {
    case "admin":  // проверим роль если админ то вернем все
      const
        students: StudentAPIRecord[] = await prisma.student.findMany(findManyArg);
      console.debug('students=', students);
      return NextResponse.json(students);
    case "teacher":  // проверим роль если преподаватель то вернем только его
      {
        const
          teacherId = (await prisma.teacher.findFirst({ where: { userId } }))?.id,
          { id } = await prisma.subject.findFirst({ where: { teachers: { some: { id: teacherId } } } }),
          students: StudentAPIRecord[] = await prisma.student.findMany({
            where: { subjects: { some: { id } } },
            ...findManyArg
          });
        return NextResponse.json(students);
      }
  }
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });


}