import Link from 'next/link';


const pages = [
  { href: '/', title: 'Home' },
  { href: '/pages-router', title: 'Page router' },
  { href: '/custom', title: 'Custom page' },
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