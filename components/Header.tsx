// Header component with theme toggle

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
              PM Dashboard
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
