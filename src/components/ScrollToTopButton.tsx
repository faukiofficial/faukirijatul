import { FaArrowUp } from 'react-icons/fa';
import { useScrollVisibility } from '../hooks/useScrollVisibility';

export function ScrollToTopButton() {
  const isVisible = useScrollVisibility();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-4 z-50 rounded-full bg-gray-900 p-4 text-white shadow-lg transition duration-300 hover:bg-blue-500"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="h-6 w-6" />
    </button>
  );
}
