import { StudentAPIRecord } from '@/app/api/student/route';
import { createFetcherStore } from './fetcher';
import type { Grade, House, Teacher } from '@prisma/client';


export const $myaccount = createFetcherStore(['/api/myaccount/']);
export const $houses = createFetcherStore<House[]>(['/api/house/']);
export const $students = createFetcherStore<StudentAPIRecord[]>(['/api/student/']);
export const $grades = createFetcherStore<Grade[]>(['/api/grade/']);
export const $teachers = createFetcherStore<Teacher[]>(['/api/teacher/']);
