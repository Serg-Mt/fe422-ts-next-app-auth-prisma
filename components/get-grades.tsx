"use client";

import { $grades } from '@/store/api';
import { useStore } from '@nanostores/react';
import { DemoGrades } from './demo-grades';


export function GetGrades() {
  const { loading, data, error } = useStore($grades);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data) {
    console.log('data=', data);
    return <>
      <DemoGrades grades={data} />
    </>
  }
}