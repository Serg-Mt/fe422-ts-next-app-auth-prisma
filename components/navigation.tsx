import Link from 'next/link';
import { ReactNode } from 'react';

const pages = [
  { href: '/', title: 'Home' },
  { href: '/pages-router', title: 'Page router' },
  // { href: '/custom', title: 'Custom page' },
  { href: '/group-list', title: 'Group List (app)' },
  { href: '/pages-router/group-list', title: 'Group List (pages)' },
  { href: '/pages-router/student-list', title: 'Student List (pages)' },
  { href: '/account', title: 'My account (app)' },
  { href: '/pages-router/account', title: 'My account (pages)' },
];

export function Navigation({ children }: { children: ReactNode }) {
  return <nav>
    <ul>
      {pages.map(({ href, title }) => <li key={href}>
        <Link href={href}>
          {title}
        </Link>
      </li>
      )}
    </ul>
    {children}
  </nav>
}