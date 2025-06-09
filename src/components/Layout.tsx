import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
