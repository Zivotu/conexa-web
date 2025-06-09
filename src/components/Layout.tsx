import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const TOOLBAR_OFFSET = 50;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [toolbarHeight, setToolbarHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      const banner = document.querySelector<HTMLIFrameElement>('.goog-te-banner-frame');
      const height = banner ? banner.getBoundingClientRect().height : 0;
      setToolbarHeight(height);
    };

    update();
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">

        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
