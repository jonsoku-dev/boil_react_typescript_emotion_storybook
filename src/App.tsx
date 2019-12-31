import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Border from './pages/Border';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Border />
    </ThemeProvider>
  );
};

export default App;
