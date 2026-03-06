// Locale-specific layout with Header

import { Header } from '@/components/Header';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  await params; // Await params even though we don't use it here
  
  return (
    <>
      <Header />
      {children}
    </>
  );
}
