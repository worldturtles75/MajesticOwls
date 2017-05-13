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
<<<<<<< HEAD
import Divider from 'material-ui/Divider';
import {
  grey500, white, teal500,
} from 'material-ui/styles/colors';
=======


import {
  grey500,red500
} from 'material-ui/styles/colors';


>>>>>>> 1bc20011748826bc7433c738d336c47aed9fed8d


 class FlightCard extends React.Component {
  constructor (props) {
    super(props);

  }


  render() {
    const styles = {
      gridList: {
        width: '100%',
        height: 400,
        overflowY: 'auto',
      },
      card: {
        width: '100%',
        height: 400,
      },
      mainTitle: {

      },
      avatar: {
<<<<<<< HEAD
        backgroundColor: teal500,
=======
        backgroundColor: grey500,
>>>>>>> 1bc20011748826bc7433c738d336c47aed9fed8d
      },
      iconrotate: {
        transform: [{ rotate: '45deg'}]
      },
      main:{
        textAlign: 'center',
        fontSize: 60,
      },
      main1:{
        textAlign: 'center',
        fontSize: 10,
      },
      avatar1:{
        align: 60,
<<<<<<< HEAD
      },
      cardHeader: {
        height: '20%',
      },
      center: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
=======
      }

>>>>>>> 1bc20011748826bc7433c738d336c47aed9fed8d

    }




    return (
      <div>
        <MuiThemeProvider>


          <Card style={styles.card}>
<<<<<<< HEAD


            <CardHeader
              title="Flight Information"
              avatar={<Avatar icon={<ActionFlightTakeoff />}
                style={styles.avatar}
                color={white}/>}
              style={styles.cardHeader}
            />
            <Divider/>
            <CardTitle
              title={this.props.flight.airline}
              subtitle={'Leaving at: ' + this.props.flight.leaveTime}

            />
            <GridList
              style = {styles.gridList}
              cols = {5}
            >
              <GridTile
                cols = {2}
              >
                <CardHeader
                  title={this.props.flight.departurePort}
                  subtitle={this.props.flight.departureCity}>
                </CardHeader>
              </GridTile>
              <GridTile>
                <Arrow/>
              </GridTile>
              <GridTile
                cols = {2}
              >
                <CardHeader
                  title={this.props.flight.arrivalPort}
                  subtitle={this.props.flight.arrivalCity}>
                </CardHeader>
              </GridTile>
            </GridList>
=======
          <CardHeader
            title="Flight Information"
            avatar={<Avatar icon={<ActionFlightTakeoff />} style={styles.avatar} color={red500}/>}
            style={styles.cardHeader}
          />
                <CardText style={styles.main}>{this.props.flight.departurePort}<br /><ul style={styles.main1}>{this.props.flight.departureCity}</ul></CardText>
                <Arrow />
                <CardText style={styles.main}>{this.props.flight.arrivalPort}<br /><ul style={styles.main1}>{this.props.flight.arrivalCity}</ul></CardText>

          <CardText>

               <ul>{this.props.flight.leaveTime}</ul>
               <ul>{this.props.flight.airline}</ul>
               <ul>{this.props.flight.flightDuration}</ul>
               <ul>{this.props.flight.leaveDate}</ul>
>>>>>>> 1bc20011748826bc7433c738d336c47aed9fed8d

          </CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}


export default FlightCard;
