import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#3f51b5',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

export default theme;
