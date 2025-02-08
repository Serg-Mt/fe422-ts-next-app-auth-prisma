import { prisma } from '@/prisma/prisma';

import { /* type NextRequest, */ NextResponse } from 'next/server'


// общедоступное API
export async function GET(/* request: NextRequest */) {
  // console.log('request=', request);
  

  return NextResponse.json(
    await prisma.group.findMany()
  );
}