import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './lib/Registry';
import 'react-alice-carousel/lib/alice-carousel.css';

const inter = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Ostivities',
  description: 'Event creation made easy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" overflow-scroll">
      <head>
        <link rel="icon" href="/Favicon.png" type="image/x-icon" sizes="any" />
      </head>
      <body className={`bg-white ${inter.className}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
