import type { House } from '@prisma/client'

export function HouseList({ houses }: { houses: House[] }) {
  return <ol>
    {houses?.map(group => <li key={group.id}>
      {group.name}
    </li>)}
  </ol>;
}