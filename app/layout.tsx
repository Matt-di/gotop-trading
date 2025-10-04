import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GoTop Trading PLC - Software, Media & Printing Solutions',
  description: 'Leading provider of software development, media production and dubbing, and professional printing services in Ethiopia. Trusted by government agencies and enterprises.',
  keywords: 'software development, media production, dubbing, printing press, Ethiopia, Addis Ababa',
  openGraph: {
    title: 'GoTop Trading PLC - Software, Media & Printing Solutions',
    description: 'Leading provider of software development, media production and dubbing, and professional printing services in Ethiopia.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
