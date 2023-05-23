import Layout from '@/layout';
import '../styles/globals.css';
import Providers from '@/provider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
