import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, defaultTheme, storageKey }) => {
  const [theme, setTheme] = useState(localStorage.getItem(storageKey) || defaultTheme);

  useEffect(() => {
    localStorage.setItem(storageKey, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme, storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
