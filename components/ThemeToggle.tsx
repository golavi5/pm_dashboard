// Theme toggle button component

'use client';

import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Ensure component only renders after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted on client
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center
        w-10 h-10 rounded-lg
        transition-colors duration-200
        ${
          theme === 'light'
            ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            : 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-800
      `}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        // Moon icon for dark mode
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        // Sun icon for light mode
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 10a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 100-2 1 1 0 000 2zm3.657-5.657a1 1 0 00-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414l1.414-1.414zm2.828 2.828a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414l1.414 1.414zm-1.414 5.656a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414l1.414 1.414zM5 10a1 1 0 01-1 1H2a1 1 0 110-2h2a1 1 0 011 1zm10 0a1 1 0 011 1h2a1 1 0 110-2h-2a1 1 0 01-1 1zm-9.657-3.657a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414l1.414 1.414zM3.343 17.657a1 1 0 001.414 1.414l1.414-1.414a1 1 0 00-1.414-1.414l-1.414 1.414zM17 11a1 1 0 100-2h-2a1 1 0 100 2h2z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
