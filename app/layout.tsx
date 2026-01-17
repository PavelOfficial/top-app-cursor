import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar/Sidebar';
import Footer from '@/components/Footer/Footer';
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
      <body>
        <div className="layout-wrapper">
          <div className="layout-content">
            <Sidebar />
            <main className="main-content">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
