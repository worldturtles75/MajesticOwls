import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/SignIn.jsx';
import DashBoard from './components/DashBoard.jsx';
import NewTrip from './components/NewTrip.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import {
  indigo500, grey300,
} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';


class App extends React.Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {

  }


  render() {
    const styles = {
      titleStyle: {
        top: 'auto',
        right: 'auto',
        left: 50,
        bottom: 'auto',
        position: 'fixed',
      },
      signInStyle: {
        top: 10,
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
      },
      homeStyle: {
        textDecoration: 'none',
      },
      centerStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      header: {
        fontFamily: "'Roboto', sans-serif",
        color: 'white',
        fontSize: '45px',
        textShadow: '-1px 0 #000000,0 1px #000000,1px 0 #000000,0 -1px #000000',
      },
      subHeader: {
        fontFamily: "'Roboto', sans-serif",
        color: grey300,
        fontSize: '36px',
        textShadow: '-1px 0 #000000,0 1px #000000,1px 0 #000000,0 -1px #000000',
      },
      image: {
        width:'100%',
        height:'100%',
        objectFit: 'cover',
        overflow: 'hidden',
      }
    }

    const Home = () => (
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
            <ToolbarGroup style={styles.signInStyle}>
              <Link to='/sign-in'>
                <FlatButton
                  style={styles.whiteTextStyle}
                  label="Sign In"
                />
              </Link>
            </ToolbarGroup>
          </Toolbar>
        </MuiThemeProvider>
        <div>
          <img src='https://www.homeadvisor.com/images/consumer/hhi/hero-photos/city/SanFrancisco.jpg' style={styles.image}/>
        </div>
        <div
          style={styles.centerStyle}>
          <p
            style={styles.header}>
            Via·tor [Latin] Wayfarer, Traveller
          </p>
          <p
            style={styles.subHeader}>
            Where you're going, we'll help you along the way.
          </p>
        </div>
      </div>
    )

    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/sign-in" component={SignIn}/>
          <Route path="/dashboard" component={DashBoard}/>
          <Route path="/trip" component={NewTrip}/>
        </div>
      </Router>
    )
  }
}
injectTapEventPlugin();
ReactDOM.render(<App/>, document.getElementById('app'));
