import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Redirect} from 'react-router';
import $ from 'jquery';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    console.log('A locaiton was submitted: ' + this.state.value);
    e.preventDefault();
    this.setState({
      submitted: true
    })
    console.log(this.state.submitted)
  }

  render() {
    const styles = {
      subHeader: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: '36px'
      },
      button: {
        backgroundColor: '#4CAF50',
        borderRadius: '8px',
        border: 'none',
        color: 'white',
        padding: '15px',
        textAlign: 'center',
        textDecoration: "none",
        display: 'inline-block',
        fontSize: '16px'
      }      
    }
    const {submitted} = this.state;
    return (
      <div>
        {/*<MuiThemeProvider>
          <TextField
            floatingLabelText="Enter Location"
            onChange={this.handleChange}
            hintText="San Francisco"
            id={2}
            floatingLabelFixed={false}
            style={styles.subHeader}
          />
        </MuiThemeProvider>*/}
        <form onSubmit={this.handleSubmit}>
          <input style={styles.subHeader} type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Location" />
          <br/>
          <input style={styles.button} type="submit" value="Submit" />
        </form>
        {submitted ? <Redirect push to="/dashboard" /> : null }
      </div>
    );
  }
}

export default LocationForm;
