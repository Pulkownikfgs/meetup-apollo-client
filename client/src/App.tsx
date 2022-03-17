import { FC, StrictMode } from 'react';
import { Layout } from './modules/Layout';

import { BrowserRouter as Router } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Pages } from './pages';
import { ApolloProvider } from './providers/ApolloProvider';

const mdTheme = createTheme();

const App: FC = () => {
  return (
    <StrictMode>
      <ApolloProvider>
        <ThemeProvider theme={mdTheme}>
          <CssBaseline />
          <Router>
            <Layout>
              <Pages />
            </Layout>
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </StrictMode>
  );
};

export default App;
