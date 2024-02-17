import ThemeProvider from '../components/theme-provider';
import Header from '../components/header';
import MainContent from '../components/main-content';

export default function Homepage() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
    </ThemeProvider>
  );
}