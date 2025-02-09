import { auth } from '@/auth';
import { prisma } from '@/prisma/prisma';
import type { Prisma } from '@prisma/client';

import { /* type NextRequest, */ NextResponse } from 'next/server'




const
  findManyArg = { include: { group: { select: { name: true } } } };
export type StudentAPIRecord = Prisma.StudentGetPayload<typeof findManyArg>

// общедоступное API
export async function GET(/* request: NextRequest */) {
  // console.log('request=', request);
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const
    students: StudentAPIRecord[] = await prisma.student.findMany(findManyArg);
  console.debug('students=', students);
  return NextResponse.json(students);

}