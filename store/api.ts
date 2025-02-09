import { StudentAPIRecord } from '@/app/api/student/route';
import { createFetcherStore } from './fetcher';
import type { Group } from '@prisma/client';

export const $myaccount = createFetcherStore(['/api/myaccount/']);
export const $groups = createFetcherStore<Group[]>(['/api/group/']);
export const $students = createFetcherStore<StudentAPIRecord[]>(['/api/student/']);
