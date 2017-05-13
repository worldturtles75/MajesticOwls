import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {
  indigo500,
} from 'material-ui/styles/colors';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  titleStyle: {
    top: 'auto',
    right: 'auto',
    left: 50,
    bottom: 'auto',
    position: 'fixed',
  },
  signOutStyle: {
    top:10,
    right: 30,
    left:'auto',
    bottom: 'auto',
    position:'fixed',
  },
  whiteTextStyle: {
    color: '#FFF',
  },
  toolbarStyle: {
    backgroundColor: indigo500,
    zIndex: 1000,
  },
  homeStyle: {
    textDecoration: 'none',
  },
}

const SignOutToolBar = () => (
  <div>
    <MuiThemeProvider>
      <Toolbar
        style = {styles.toolbarStyle}>
        <ToolbarGroup firstChild={true} style={styles.titleStyle}>
          <Link to='/'
            style={styles.homeStyle}
          >
            <ToolbarTitle
            text="Via·tor"
            style={styles.whiteTextStyle}
            />
          </Link>
        </ToolbarGroup>
        <ToolbarGroup style={styles.signOutStyle}>
          <Link to='/'>
            <FlatButton
              style={styles.whiteTextStyle}
              label="Sign Out"
            />
          </Link>
        </ToolbarGroup>
      </Toolbar>
    </MuiThemeProvider>
  </div>
)
export default SignOutToolBar;