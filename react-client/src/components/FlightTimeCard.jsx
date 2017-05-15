import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MapNavigation from 'material-ui/svg-icons/action/cached';
import Avatar from 'material-ui/Avatar';
import Arrow from 'material-ui/svg-icons/navigation/arrow-forward';
import Divider from 'material-ui/Divider';
import $ from 'jquery';
import ReactHighcharts from 'react-highcharts';
import {
  grey500, white, green500,
} from 'material-ui/styles/colors';


class FlightTime extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      config: {},
      data:[],
      dates: [],
      count:[]
    }
  }

  getInitialState(){
    this.setState({
      config: {
        /* HighchartsConfig */
        chart: {
          type: 'bar',
          height: 300,
          width:400,
          fontFamily: "'Roboto', sans-serif",
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
          style: {
            display: 'none'
          }
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        series: [{
          name: 'Miles',
          showInLegend: false,
          data: [300.9, 500.5, 106.4, 129.2, 144.0, 176.0]
        }]
      }
    })
  }

  componentDidMount(){
    this.getInitialState();
  }

  render() {
    const styles = {
      card: {
        width: '100%',
        height: 400,
      },
      avatar: {
        backgroundColor: green500,
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
            title="Flight Milage"
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
