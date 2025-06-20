import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const SF = localFont({
  src: '../../public/fonts/SFPro-Bold.otf'
});

export const metadata: Metadata = {
  title: "Daksh Lal's MacBook",
  description: "Daksh Lal's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/window.svg" sizes="any" />
      <body
        className={`${SF} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
