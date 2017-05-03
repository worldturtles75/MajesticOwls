import React from 'react';
import {render} from 'react-dom';
import Search from './components/Search.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }
  render () {
    return ( 
      <div>Hello Majestic Owls</div>
    )
  }
}

render(<App/>, document.getElementById('app'));
