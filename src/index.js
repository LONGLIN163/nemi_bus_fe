import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import {deepPurple,grey, teal} from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main:grey[900]
    },
    secondary: {
      main:teal["A200"],
      light:teal[200],
      dark:teal[800]
    },
    type:'dark',
    spacing:{
      unit:10
    }
  },
});


ReactDOM.render( 
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


