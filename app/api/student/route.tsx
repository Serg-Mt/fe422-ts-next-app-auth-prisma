import { auth } from '@/auth';
import { prisma } from '@/prisma/prisma';

import { /* type NextRequest, */ NextResponse } from 'next/server'


// общедоступное API
export async function GET(/* request: NextRequest */) {
  // console.log('request=', request);
  const session = await auth();
  if (!session?.user) return NextResponse.json({error: 'Unauthorized'}, {status: 401});
  return NextResponse.json(
    await prisma.student.findMany()
  );
}