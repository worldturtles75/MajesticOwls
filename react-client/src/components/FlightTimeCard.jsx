import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MapNavigation from 'material-ui/svg-icons/maps/navigation';
import Avatar from 'material-ui/Avatar';
import Arrow from 'material-ui/svg-icons/navigation/arrow-forward';
import Divider from 'material-ui/Divider';
import $ from 'jquery';
import ReactHighcharts from 'react-highcharts';


import {
  grey500, white, yellow500,
} from 'material-ui/styles/colors';


 class FlightTime extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      config: {},
      data:[]
    }
  }
  databaseFlightSearch() {

    var context = this;
    $.ajax({
      type: 'GET',
      url: '/database/return',
      datatype: 'json'
    })
    .done(function(data) {
      context.setState({
        data:data
      })
      context.getInitialState();

      console.log('success GET', data);
      })
    .fail(function(err) {
      console.log('failed to GET', err);
    })
  }

  getInitialState(){
console.log(this.state.data);


        this.setState({
          config: {
              /* HighchartsConfig */
              chart: {
                type: 'bar',
                height: 300,
                width:400
              },
              shadow: {
                color: 'yellow',
                width: 10,
                offsetX: 0,
                offsetY: 0
              },
              yAxis: {
                title: {
                  text: 'Miles'
                }
              },

              title: {
                text: 'Flight Milage'
              },
              xAxis: {
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
              },
              series: [{
                  name: 'Miles',
                  showInLegend: false,
                  data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
              }]
          }
        })
      }

      componentDidMount(){
          this.databaseFlightSearch();
        }

  render() {
    const styles = {
      card: {
        width: '100%',
        height: 400,
      },
      avatar: {
        backgroundColor: yellow500,
      },
      cardHeader: {
        height: '20%',
      },
      chart: {
        width: '80%'
      }
    }
    return (
      <div>
        <Card
          style={styles.card}>
          <CardHeader
            title="Air Time"
            subtitle='TEST ADDRESS HERE'
            avatar={<Avatar icon={<MapNavigation />}
              style={styles.avatar}
              color={white}/>}
            style={styles.cardHeader}
          />
          <Divider/>
          <ul style={styles.chart}> {<ReactHighcharts config={this.state.config} ref="chart"/>}
          </ul>
        </Card>
      </div>
    )
  }
}

export default FlightTime;
