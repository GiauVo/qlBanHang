import React from "react";
import './App.css';
import SideMenu from "../components/SideMenu";
import {createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider} from "@material-ui/core";
import Header from "../components/Header";
import Employees from "../pages/Employees/Employees";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary:  {
            main: "#f83245",
            light: '#f8324526'
        },
        background: {
            default: "f4f5fd"
        }
    },
    overrides:{
        MuiAppBar: {
            root:{
                transform: 'translateZ(0)'
            }
        }
    },
    props: {
        MuiIconButton: {
            disableFocusRipple: true
        }
    }
})

const useStyles =  makeStyles({
    appMain: {
        paddingLeft: '320px',
        width: '100%'
    }
})

function App() {
    const classes = useStyles();
    return (
      <MuiThemeProvider theme={theme}>
        <SideMenu/>
        <div className={classes.appMain}>
            <Header />
            <Employees/>
        </div>
          <CssBaseline/>
      </MuiThemeProvider>
    );
}

export default App;