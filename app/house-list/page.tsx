import { HouseList } from '@/components/house-list';
import { prisma } from '@/prisma/prisma';


export default async function Page() {
  const
    // responce = await fetch('http://localhost:3000/api/group/'),
    houses = await prisma.house.findMany();

  return <> RSC
    <HouseList houses={houses} />
  </>
}