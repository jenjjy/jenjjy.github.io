import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#ffc732' //yellow
    },
    secondary: {
      main: '#ff5d6a' //red-orange
    },
    error: {
      main: '#FF9494'
    },

    text: {
      main: '#515152',
      light: '#fff'
    },

    background: {
      main: '#252627'
    }
  },

  typography: {
    useNextVariants: true
  }
});
