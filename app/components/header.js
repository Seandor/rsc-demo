'use client';
import React from 'react';

import { useThemeContext } from './theme-provider';
import { Moon, Sun } from './icons';

const Header = () => {
  const {theme, setTheme} = useThemeContext();

  const onToggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header>
      <h1>React server components - client boundary</h1>
      <div className="flex items-center py-2 px-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-gray-900">Toggle Theme</h2>
        </div>
        <div>
          <button
            className={`${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
            } relative inline-flex items-center h-6 rounded-full w-11`}
            onClick={onToggleDarkMode}
          >
            <span
              className={`${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
            />
            <Moon className={`${theme === 'dark' ? 'text-gray-300' : 'hidden'} fill-current w-6 h-6`}/>
            <Sun className={`${theme === 'dark' ? 'hidden' : 'text-yellow-500'} fill-current w-6 h-6`}/>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
