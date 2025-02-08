import { auth } from '@/auth';
import { /* type NextRequest, */ NextResponse } from 'next/server'

export async function GET(/* request: NextRequest */) {
  // console.log('request=', request);
  const data = await auth();
  return NextResponse.json(data);
}