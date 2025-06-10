import Navigation from './Navigation';
import Footer from './Footer';
import { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1" style={{ paddingTop: 64 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
