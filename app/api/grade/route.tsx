import { auth } from '@/auth';
import { prisma } from '@/prisma/prisma';

import { /* type NextRequest, */ NextResponse } from 'next/server'


// общедоступное API
export async function GET(/* request: NextRequest */) {
  // console.log('request=', request);
  
  // const session = await auth();
  // проверим роль если админ то вернем все
  // найдем связь если студент то только его оценки
  // если преподаватель то только его 
  // или отбой
  return NextResponse.json(
    await prisma.grade.findMany()
  );
}