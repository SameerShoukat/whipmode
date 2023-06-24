import { useCallback, useEffect, useRef } from 'react';

export default function UseIsMounted(){
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const mounted = useCallback(() => {
    return isMounted;
  }, []);

  return mounted();
}