import { useEffect, useRef, useState } from 'react';

export default function useDetectScrollDirection(): 'top' | 'bottom' | null {
  const [detectedScrollDirection, setDetectedScrollDirection] = useState<'top' | 'bottom' | null>('top');
  const scrollOldValueRef = useRef(0);
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollNewValue = window.pageYOffset;
      if (scrollOldValueRef.current - scrollNewValue < 0 && scrollNewValue > 55) {
        if (detectedScrollDirection !== 'bottom') {
          setDetectedScrollDirection('bottom');
        }
      } else if (scrollOldValueRef.current - scrollNewValue > 0) {
        if (detectedScrollDirection !== 'top') {
          setDetectedScrollDirection('top');
        }
      }
      scrollOldValueRef.current = scrollNewValue;
    };
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [detectedScrollDirection]);

  return detectedScrollDirection;
}