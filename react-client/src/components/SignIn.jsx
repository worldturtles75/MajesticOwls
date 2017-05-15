import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import GoogleButton from 'react-google-button'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import {
  indigo500, blue500,
} from 'material-ui/styles/colors';

const styles = {
  titleStyle: {
    top: 'auto',
    right: 'auto',
    left: 50,
    bottom: 'auto',
    position: 'fixed',
  },
  signInStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  googleSignInStyle: {
    textDecoration: 'none',
  },
  whiteTextStyle: {
    color: '#FFF',
  },
  toolbarStyle: {
    backgroundColor: indigo500,
  },
  homeStyle: {
    textDecoration: 'none',
  },
  header: {
    fontFamily: "'Roboto', sans-serif",
    color: 'white',
    fontSize: '45px',
  },
  image: {
    width:'100%',
    height:'100%',
    objectFit: 'cover',
    overflow: 'hidden',
  }
}

const SignIn = () => (
  <div> 
    <MuiThemeProvider>
      <Toolbar
        style = {styles.toolbarStyle}
      >
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
      </Toolbar>
    </MuiThemeProvider>
    <div>
      <img src='http://24.media.tumblr.com/40614d640a1355924b2982ef2258be9c/tumblr_n6e8t8xbTu1tv2nyvo1_500.gif' style={styles.image}/>
    </div>
    <div
      style = {styles.signInStyle} >
      <p
        style={styles.header}>
        Your destination awaits, don't be late.
      </p>
      <a href="/auth/google"
        style = {styles.googleSignInStyle}>
        <GoogleButton />
      </a>
    </div>
  </div>
)

export default SignIn;