'use client';

import useTheme from './components/use-theme';
import Header from './components/header-simple';
import MainContent from './components/main-content';

export default function Homepage() {
  const [theme, ] = useTheme();

  return (
    <body style={{ backgroundColor: theme === 'dark' ? '#000' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      <Header />
      <MainContent />
    </body>
  );
}