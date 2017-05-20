import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CardIcon from 'material-ui/svg-icons/social/location-city';
import {red500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import MapIcon from 'material-ui/svg-icons/maps/place';
import ItinIcon from 'material-ui/svg-icons/action/list';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  avatar: {
    backgroundColor: red500,
  },  
  gridList: {
    width: '99%',
    height: '80%',
    overflowY: 'auto',
    padding: '10 0 0 0',
    cols:'1',
    padding: '5 5 5 5 '    
  },
  gridTile: {
    height: '85%',
    width: '100%',
  },
  gridListImg: {
    position: 'relative',
    width: '250',
    height: '250',
  },
  center: {
    margin: '0 auto',
    width: '60px'  
  }  
};


class PlacesToGoCard extends React.Component {
  constructor (props) {
    super(props);
    this.handleCheckedSight = this.handleCheckedSight.bind(this);
    this.handleFavoritedSight = this.handleFavoritedSight.bind(this);
  }

  handleCheckedSight(place, checked) {
    this.props.addToMaps(place, checked);
  }

  handleFavoritedSight(place, checked) {
    this.props.addToItinerary(place, checked);
  }

  render() {
    return (      
      <div>
        <Card style={styles.card}>
          <CardHeader
            title="Places To Go"
            subtitle={<span>'Top 10 Suggested Places <small>(Powered by Foursquare)</small></span>}
            avatar={<Avatar icon={<CardIcon />} style={styles.avatar} />}
            style={styles.cardHeader}
          />      

        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          {this.props.sights.map((attraction, i) => (
            <div key={i}>
              <div>
                <GridTile
                  key={i}
                  title={i+1 + '. ' + attraction.venue.name}
                  subtitle={<span># Reviews: {attraction.venue.ratingSignals} | Rating: {attraction.venue.rating} <p>{attraction.venue.categories[0].pluralName}</p></span>}
                  titlePosition="top"
                  titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                  style = {styles.gridTile}
                >

                    
                <a  target="_blank" href={attraction.venue.url}>
                  <img 
                    style={styles.gridListImg} src={attraction.venue.photos.groups[0].items[0].prefix + 'width960' + attraction.venue.photos.groups[0].items[0].suffix} 
                  />
                </a>   

                </GridTile>
              </div>

              <div style={styles.center}>
                <div style={{display: 'flex', flexDirection: 'row', fontSize: 30}}>
                  <div style ={{width: '120%'}}>
                    <Checkbox 
                      checkedIcon={<ItinIcon />}
                      uncheckedIcon={<ItinIcon />}
                      onCheck={ (e,checked) => {
                      this.handleFavoritedSight(attraction.venue, checked)} } 
                    />
                  </div>
                  <div style ={{width: '120%'}}>
                    <Checkbox 
                      checkedIcon={<MapIcon />}
                      uncheckedIcon={<MapIcon />}
                      onCheck={ (e,checked) => {
                        attraction.venue.coordinates = {};
                        attraction.venue.coordinates.latitude = attraction.venue.location.lat;
                        attraction.venue.coordinates.longitude = attraction.venue.location.lng;
                        this.handleCheckedSight(attraction.venue, checked)} } 
                    />
                  </div>           
                </div>           
              </div>


            </div>         

          ))}
        </GridList>

        </Card>        
      </div>
    ) 
  }
};

export default PlacesToGoCard;



// const styles = {  
//   cardHeader: {
//     height: '20%',
//   },
//   list: {
//     width: '100%',
//     height: '75%',
//     overflowY: 'auto',
//   },
//   card: {
//     width: '100%',
//     height: 400,
//   },
//   avatar: {
//     backgroundColor: red500,
//   },
//   block: {
//     maxWidth: 250,
//   },
//   listitem: {
//     height: 400
//   }
// }

// class PlacesToGoCard extends React.Component {
//   constructor (props) {
//     super(props);
//     this.handleCheckedSight = this.handleCheckedSight.bind(this);
//     this.handleFavoritedSight = this.handleFavoritedSight.bind(this);
//   }

//   handleCheckedSight(place, checked) {
//     this.props.addToMaps(place, checked);
//   }

//   handleFavoritedSight(place, checked) {
//     this.props.addToItinerary(place, checked);
//   }

//   render () {
//     return (
//       <div>

//         <Card style={styles.card}>
//           <CardHeader
//             title="Places to See"
//             subtitle={this.props.location + ': Top 10 Attractions'}
//             avatar={<Avatar
//               icon={<MapsPlace />}
//               style={styles.avatar}
//             />}
//             style={styles.cardHeader}
//           />
//           <Divider/>
//           <List
//             style={styles.list}
//           >

//             {this.props.sights.map((attraction, i) => (
//               <ListItem
//                 target="_blank"
//                 href={attraction.venue.url}
//                 key={i}
//               >
              
//               <div style={{display: 'flex', flexDirection: 'row', fontSize: 18}}>
//                 <div style={{display: 'flex', flexDirection: 'row', fontSize: 18}}>
//                   <div style ={{width: '10%'}}>
//                     <Checkbox 
//                       checkedIcon={<ActionFavorite />}
//                       uncheckedIcon={<ActionFavoriteBorder />}
//                       onCheck={ (e,checked) => {
//                       this.handleFavoritedSight(attraction.venue, checked)} } 
//                     />
//                   </div>
//                   <div style ={{width: '10%'}}>
//                     <Checkbox 
//                       onCheck={ (e,checked) => {
//                         attraction.venue.coordinates = {};
//                         attraction.venue.coordinates.latitude = attraction.venue.location.lat;
//                         attraction.venue.coordinates.longitude = attraction.venue.location.lng;
//                         this.handleCheckedSight(attraction.venue, checked)} } 
//                     />
//                 </div>
//                   <div> {i+1 + '. ' + attraction.venue.name}
//                     <div style={{display: 'block', fontWeight: 200, fontSize: 14}}> {'# Reviews: ' + attraction.venue.ratingSignals + ' | Rating: ' + attraction.venue.rating + ' | ' + attraction.venue.categories[0].pluralName} 
//                     </div>
//                   </div>
//                 </div>
//                 <div> 
//                   <img 
//                     src={attraction.venue.photos.groups[0].items[0].prefix + 'width960' + attraction.venue.photos.groups[0].items[0].suffix}
//                     style={{height: "100", width: "100"}}
//                   /> 
//                 </div>
//               </div>

//             </ListItem>
            
//             ))}
//           </List>


//         </Card>
//       </div>
//     )
//   }
// }



// export default PlacesToGoCard;

//things to do
  //need to get it to re-route to url once clicked
  //need to get photos to display


//attraction.venue.location.lat/lng
// const PlacesToEatCard = (props) => (
// )

// import React from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import Star from 'material-ui/svg-icons/toggle/star';
// import MapsPlace from 'material-ui/svg-icons/maps/place';
// import Avatar from 'material-ui/Avatar';
// import {
//   grey500, blueGrey500
// } from 'material-ui/styles/colors';
// import Divider from 'material-ui/Divider';

// const styles = {
//   cardHeader: {
//     height: '20%',
//   },
//   gridList: {
//     width: '100%',
//     height: '80%',
//     overflowY: 'auto',
//   },
//   card: {
//     width: '100%',
//     height: 400,
//   },
//   avatar: {
//     backgroundColor: blueGrey500,
//   }
// }

// const SightsCard = (props) => (
//   <div>
//     <Card
//       style={styles.card}
//     >
//       <CardHeader
//         title="Places of Interest"
//         subtitle='sldkjf'
//         avatar={<Avatar icon={<MapsPlace />} style={styles.avatar} />}
//         style={styles.cardHeader}
//       />
//       <Divider/>
//       <GridList
//         cellHeight={180}
//         style={styles.gridList}
//       >
//           <GridTile
//             key='sldkfj'
//             title='sldkfj'
//             subtitle={<b>'dslkfj'</b>}
//             actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
//           >
//             <a target="_blank" href='https://google.com'>
//             <img src="https://s-media-cache-ak0.pinimg.com/736x/80/d3/64/80d364e09d31fcba8af274926d4332ff.jpg" />
//             </a>
//           </GridTile>
//       </GridList>
//     </Card>
//   </div>
// )

// export default SightsCard;