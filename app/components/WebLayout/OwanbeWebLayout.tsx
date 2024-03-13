import RootLayout from '@/app/layout';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function OwanbeWebLayout({
  children,
  active,
  location,
  className,
}: {
  children: React.ReactNode;
  active?: string;
  location?: string;
  className?: string;
}): JSX.Element {
  return (
    <RootLayout>
      <main className={`${className} min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </main>
    </RootLayout>
  );
}

export default OwanbeWebLayout;
