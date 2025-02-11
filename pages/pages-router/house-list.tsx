import { HouseList } from '@/components/house-list';
import { $houses } from '@/store/api';
import { useStore } from '@nanostores/react';


export default function Page() {
  const { data, loading, error } = useStore($houses);
  if (data)
    return <HouseList houses={data} />;
  if (loading)
    return <>Loading...</>;
  return <>Error!={String(error)}</>;
}

