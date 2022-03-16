import { FC, StrictMode } from 'react';
import { Layout } from './modules/Layout';

import { BrowserRouter as Router } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Pages } from './pages';

const mdTheme = createTheme();

const App: FC = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={mdTheme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Pages />
          </Layout>
        </Router>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
