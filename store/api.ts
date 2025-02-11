import { StudentAPIRecord } from '@/app/api/student/route';
import { createFetcherStore } from './fetcher';
import type { House } from '@prisma/client';

export const $myaccount = createFetcherStore(['/api/myaccount/']);
export const $houses = createFetcherStore<House[]>(['/api/house/']);
export const $students = createFetcherStore<StudentAPIRecord[]>(['/api/student/']);
