import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import Avatar from 'material-ui/Avatar';
import Arrow from 'material-ui/svg-icons/navigation/arrow-forward';
import Divider from 'material-ui/Divider';
import {
  grey500, white, teal500,
} from 'material-ui/styles/colors';


 class FlightCard extends React.Component {
  constructor (props) {
    super(props);

  }


  render() {
    const styles = {
      gridList: {
        width: '100%',
        height: '40%',
      },
      card: {
        width: '100%',
        height: 400,
      },
      avatar: {
        backgroundColor: teal500,
      },
      cardHeader: {
        height: '20%',
      },
      center: {
        position: 'absolute',
        top: '50%',
        left: '75%',
        transform: 'translate(-50%, -50%)',
      },
      centerArrow: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      centerDiv: {
        position: 'relative',
      }
    }
    return (
      <div>
        <MuiThemeProvider>
          <Card style={styles.card}>
            <CardHeader
              title="Flight Information"
              subtitle='Status: On-Time'
              avatar={<Avatar icon={<ActionFlightTakeoff />}
                style={styles.avatar}
                color={white}/>}
              style={styles.cardHeader}/>
            <Divider/>
            <CardTitle
              title={this.props.flight.airline + ' ' + this.props.flight.flightNumber}
              subtitle={'Leaving at: ' + this.props.flight.leaveTime + ' on ' + this.props.flight.leaveDate} />
            <GridList
              style = {styles.gridList}
              cols = {7} >
              <GridTile
                cols = {3}
                style = {styles.centerDiv} >
                <CardHeader
                  title={this.props.flight.departurePort}
                  subtitle={this.props.flight.departureCity}
                  style = {styles.center} >
                </CardHeader>
              </GridTile>
              <GridTile
                style = {styles.centerDiv} >
                <Arrow
                  style = {styles.centerArrow} />
              </GridTile>
              <GridTile
                cols = {3} 
                style = {styles.centerDiv} >
                <CardHeader
                  title={this.props.flight.arrivalPort}
                  subtitle={this.props.flight.arrivalCity}
                  style={styles.center}>
                </CardHeader>
              </GridTile>
            </GridList>
            <CardHeader
              title={'Flight Duration ' + this.props.flight.flightDuration}
              style={styles.cardHeader}>
            </CardHeader>
          </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}


export default FlightCard;
