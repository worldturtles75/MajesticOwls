import React from 'react';
import {render} from 'react-dom';
import Search from './components/Search.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchFlight = this.searchFlight.bind(this);
    this.searchAddress = this.searchAddress.bind(this);
    this.dropDownSelect = this.dropDownSelect.bind(this);
    this.state = { 
      trips: [],
    }
  }

  searchFlight (flight) {

  }

  searchAddress (address) {

  }

  dropDownSelect (trip) {

  }


  render () {
    return ( 
      <div>Hello Majestic Owls, this is still in testing phases</div>
    )
  }
}

render(<App/>, document.getElementById('app'));
