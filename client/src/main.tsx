import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const mdTheme = createTheme();

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
