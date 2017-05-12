import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {
  indigo500,
} from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';


class NewTrip extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
    this.state = {
      finished: false,
      stepIndex: 0,
      airline: 'AL',
      flightNumber: '',
      finalDestination: '',
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleNext () {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev () {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };
  handleChange (event, index, value) { 
    this.setState({airline: value});
  }
  getStepContent(stepIndex) {
    let DateTimeFormat = global.Intl.DateTimeFormat;
    switch (stepIndex) {
      case 0:
        return (<MuiThemeProvider><SelectField
          floatingLabelText='Airline'
          value={this.state.airline}
          onChange={this.handleChange}
        >
          <MenuItem value='AL' label='Alaska Airlines (AL)' primaryText='Alaska Airlines' />
          <MenuItem value='AA' label='American Airlines (AA)' primaryText="American Airlines" />
          <MenuItem value='DL' label='Delta Airlines (DL)' primaryText="Delta Airlines" />
          <MenuItem value='F9' label='Frontier Airlines (F9)' primaryText='Frontier Airlines' />
          <MenuItem value='WN' label='Southwest Airlines (WN)' primaryText='Southwest Airlines'/>
          <MenuItem value='NK' label='Spirit Airlines (NK)' primaryText='Spirit Airlines' />
          <MenuItem value='UA' label='United Airlines (UA)' primaryText='United Airlines' />
          <MenuItem value='VX' label='Virgin America (VX)' primaryText='Virgin America' />
        </SelectField></MuiThemeProvider>);
      case 1:
        return (<div>
                  <MuiThemeProvider><TextField
                    floatingLabelText="Flight Number"
                    hintText="007"
                  />
                  </MuiThemeProvider>
                  <MuiThemeProvider>
                  <DatePicker
                    hintText="Flight Date"
                    firstDayOfWeek={0}
                    formatDate={new DateTimeFormat('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    }).format}/>
                  </MuiThemeProvider>
                </div>
                );
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  };
  render () {
    const {finished, stepIndex} = this.state;
    const styles = {
      titleStyle: {
        top: 'auto',
        right: 'auto',
        left: 50,
        bottom: 'auto',
        position: 'fixed',
      },
      contentStyle: {
        margin: '0 16px',
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
      fab: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        zIndex: 100,
        position: 'fixed',
      },
      homeStyle: {
        textDecoration: 'none',
      },
    }
    return (
      <div>
        <div>
          <MuiThemeProvider>
            <Toolbar
              style = {styles.toolbarStyle}>
              <ToolbarGroup firstChild={true} style={styles.titleStyle}>
                <Link to='/'
                  style={styles.homeStyle}
                >
                  <ToolbarTitle
                  text="Advena"
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
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
          <MuiThemeProvider>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Select Airline</StepLabel>
              </Step>
              <Step>
                <StepLabel>Choose Flight # & Date</StepLabel>
              </Step>
              <Step>
                <StepLabel>Add Final Destination Address</StepLabel>
              </Step>
            </Stepper>
          </MuiThemeProvider>
          <div style={styles.contentStyle}>
            {finished ? (
              <p>
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndex: 0, finished: false});
                  }}
                >
                  Click here
                </a> to reset the example.
              </p>
            ) : (
              <div>
                {this.getStepContent(stepIndex)}
                <div style={{marginTop: 12}}>
                  <MuiThemeProvider>
                    <FlatButton
                      label="Back"
                      disabled={stepIndex === 0}
                      onClick={this.handlePrev}
                      style={{marginRight: 12}}
                    />
                  </MuiThemeProvider>
                  <MuiThemeProvider>
                    <RaisedButton
                      label={stepIndex === 2 ? 'Finish' : 'Next'}
                      primary={true}
                      onClick={this.handleNext}
                    />
                  </MuiThemeProvider>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NewTrip;