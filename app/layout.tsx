import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Top App - Courses Platform',
  description: 'Courses and top-page platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

