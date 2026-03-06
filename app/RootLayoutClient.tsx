// Client-side root layout wrapper with theme provider

'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/Header';

export function RootLayoutClient({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      {children}
    </ThemeProvider>
  );
}
