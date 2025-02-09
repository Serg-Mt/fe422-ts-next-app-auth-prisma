import { ReactNode } from 'react';
import { Navigation } from './navigation';

export function Header({ children = null }: { children: ReactNode }) {
  return <header>
    <Navigation />
    {children}
  </header>
}