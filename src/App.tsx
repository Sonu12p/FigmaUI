import React from 'react';
import './App.scss';
import RightContainer from './components/RightContainer';
import LeftContainer from './components/LeftContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from "@mui/material/Grid";

const theme = createTheme({
  palette: {
    primary: {
      main: '#5048E5',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        }
      },
      styleOverrides: {
        root: {
          input: {
            fontSize: 14
          },
          label: {
            color: '#333',
            fontSize: 14
          }
        }
      }
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container>
          <Grid item sm={12} lg={7}>
            <div className='leftContainerWrapper'>
              <LeftContainer />
            </div>
          </Grid>
          <Grid item sm={12} lg={5}>
            <RightContainer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
