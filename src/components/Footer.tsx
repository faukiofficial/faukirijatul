import { useCallback } from 'react';
import { Link } from 'react-router-dom';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <footer className="flex h-16 items-center justify-center bg-gray-800 text-center text-white">
      <p>
        <span>&copy; {CURRENT_YEAR} - </span>
        <Link to="/" onClick={handleScrollToTop} className="hover:underline">
          Fauki Rijatul H
        </Link>
        <span>. All rights reserved.</span>
      </p>
    </footer>
  );
}
