import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import './tailwind.css';
import { Header } from './components/global/Header';
import Footer from './components/global/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='bg-primary-light/10 h-screen'>
        <Header />
        <main className='flex-1 flex flex-col p-6 min-h-[calc(100dvh-14rem)] max-w-[1200px] mx-auto'>{children}</main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
