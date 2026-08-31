import { useState, useEffect } from 'react';

/** Default scroll threshold (in pixels) before showing the scroll-to-top button */
const DEFAULT_SCROLL_THRESHOLD = 300;

/**
 * Tracks whether the user has scrolled past a certain threshold.
 * @param threshold - Scroll position (in px) after which the element becomes visible
 */
export function useScrollVisibility(
  threshold = DEFAULT_SCROLL_THRESHOLD,
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isVisible;
}
