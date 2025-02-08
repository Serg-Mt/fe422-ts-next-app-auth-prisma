import { createFetcherStore } from './fetcher';
import type { Group, Student } from '@prisma/client';

export const $myaccount = createFetcherStore(['/api/myaccount/']);
export const $groups = createFetcherStore<Group[]>(['/api/group/']);
export const $students = createFetcherStore<Student[]>(['/api/student/']);
