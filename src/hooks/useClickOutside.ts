import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback: any, dependencies?: any) => {
  const ref = useRef<any>();
  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref, dependencies]);

  return ref;
};
