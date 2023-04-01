import { useState, useEffect } from 'react';

type ColorScheme = 'light' | 'dark';

export const useScheme = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      const scheme =
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
      setColorScheme(scheme);
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setColorScheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setColorScheme('light');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    if (colorScheme === 'dark') {
      document.querySelector('html')?.classList.add(colorScheme);
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [colorScheme]);

  const toggleTheme = () => {
    if (colorScheme === 'light') {
      setColorScheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setColorScheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return {
    colorScheme,
    toggleTheme,
  };
};
