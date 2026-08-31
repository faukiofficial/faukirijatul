import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function MainLayout() {
  useScrollToTop();

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
