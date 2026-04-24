import { useState, useEffect } from 'react';

function useLoading(timer = 2000) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, timer);

    return () => clearTimeout(timeout);
  }, [timer]);

  return isLoading;
}

export default useLoading;