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

class NewTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
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
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
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
                <StepLabel>Add Final Destination</StepLabel>
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
                <p>{this.getStepContent(stepIndex)}</p>
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