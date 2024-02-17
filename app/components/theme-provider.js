'use client';
import React, { createContext, useContext } from 'react';
import useTheme from './use-theme';

export const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useTheme();

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <body style={{ backgroundColor: theme === 'dark' ? '#000' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
        {children}
      </body>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;