import Link from 'next/link';

const pages = [
  { href: '/', title: 'Home' },
  // { href: '/pages-router', title: 'Page router' },
  // { href: '/custom', title: 'Custom page' },
  { href: '/house-list', title: 'House List (app)' },
  { href: '/pages-router/house-list', title: 'House List (pages)' },
  { href: '/pages-router/student-list', title: 'Student List (pages)' },
  { href: '/account', title: 'My account (app)' },
  { href: '/pages-router/account', title: 'My account (pages)' },
  { href: '/grades', title: 'Grades' }
];

export function Navigation() {
  return <nav>
    <ul>
      {pages.map(({ href, title }) => <li key={href}>
        <Link href={href}>
          {title}
        </Link>
      </li>
      )}
    </ul>
  </nav>
}