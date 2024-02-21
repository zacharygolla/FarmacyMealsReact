import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d6ffa6',
    },
    secondary: {
      main: '#fff9e7',
    },
    background: {
        default: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  
});

export default theme;
