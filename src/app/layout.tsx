// src/app/layout.tsx
"use client";

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { usePathname } from 'next/navigation';
import "./globals.css";
import './assets/scss/bootstrap/scss/bootstrap.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';
  const isOverview = pathname === '/overview'
  const isSettings = pathname === '/settings'
  const isSupport = pathname === '/support'
  const isAnalytics = pathname === '/analytics'

  return (
    <html lang="en">
      <body className="antialiased">
        <Provider store={store}>
          {!isDashboard && !isOverview && !isSettings && !isSupport && !isAnalytics && <NavBar />}
          {children}
          {!isDashboard && !isOverview && !isSettings && !isSupport && !isAnalytics && <Footer />}

        </Provider>
      </body>
    </html>
  );
}