import Navigation from './Navigation';
import Footer from './Footer';

const TOOLBAR_OFFSET = 50;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation offset={TOOLBAR_OFFSET} />
      <main className="flex-1" style={{ paddingTop: 64 + TOOLBAR_OFFSET }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
