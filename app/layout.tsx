import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "react-alice-carousel/lib/alice-carousel.css";
import "./globals.css";
import StyledComponentsRegistry from "./lib/Registry";
import Providers from "./providers";

const inter = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Ostivities",
  description: "Revolutionizing Event Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Favicon.png" type="image/x-icon" sizes="any" />
      </head>
      <body
        className={`bg-white ${inter.className} overflow-y-auto min-h-screen`}
      >
        <Providers>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
