import Navigation from './Navigation';
import Footer from './Footer';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

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
