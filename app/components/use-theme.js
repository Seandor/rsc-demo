'use client';

import { useEffect } from 'react';
import { useLocalStorage } from './use-local-storage';

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (!theme) {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    }

    const handleChange = (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  console.log('theme: ', theme);
  return [theme, setTheme];
};

export default useTheme;