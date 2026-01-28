import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Visiontact | Recruiter Workspace',
  description: 'Human-Centered AI Recruitment Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
