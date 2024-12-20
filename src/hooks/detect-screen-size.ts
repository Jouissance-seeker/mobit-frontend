import { useEffect, useState } from 'react';

export default function useDetectScreenSize(): any {
  const [windowSize, setWindowSize] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  useEffect((): any => {
    function handleResize() {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
