import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import MapsLocalDining from 'material-ui/svg-icons/maps/local-dining';
import {red500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import ItinIcon from 'material-ui/svg-icons/action/list';
import MapIcon from 'material-ui/svg-icons/maps/place';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  cardHeader: {
    height: '20%',
  },
  list: {
    width: '100%',
    height: '75%',
    overflowY: 'auto',
  },
  card: {
    width: '100%',
    height: 400,
  },
  avatar: {
    backgroundColor: red500,
  },
  block: {
    maxWidth: 250,
  },
  center: {
    margin: '0 auto',
    width: '120px'  
  }
}


class PlacesToEatCard extends React.Component {
  constructor (props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleFavoritedSight = this.handleFavoritedSight.bind(this);
  }

  handleCheck(restaurant, checked) {
    this.props.handleFavFood(restaurant, checked);
  }

  handleFavoritedSight(place, checked) {
    this.props.addToItinerary(place, checked);
  }

  render () {
    return (
      <div>
        <Card style={styles.card}>
          <CardHeader
            title="Places To Eat"
            subtitle={<span>Top 10 Most Reviewed Restaurants<small> (Powered by Yelp)</small></span>}
            avatar={<Avatar
              icon={<MapsLocalDining />}
              style={styles.avatar}
            />}
            style={styles.cardHeader}
          />
          <List
            style={styles.list}
          >
            {this.props.food.map((restaurant, i) => (
              <div key={i}>
                <ListItem
                  key={i}
                  rightAvatar={<Avatar src={restaurant.image_url} />}
                  // leftCheckbox={
                  //   <div style ={{display:'block', width: '10%'}}>
                  //     <Checkbox 
                  //     style ={{width: '10%'}}
                  //     checkedIcon={<ActionFavorite />}
                  //     uncheckedIcon={<ActionFavoriteBorder />}
                  //     iconStyle={{left: '4'}, {bottom: '3.77'}}
                  //     onCheck={ (e,checked) => {
                  //       this.handleFavoritedSight(restaurant, checked)} }
                  //     />
                  //   </div>
                  // }
                  // leftAvatar={
                  //   <div style ={{width: '10%'}}>                
                  //     <Checkbox 
                  //     iconStyle={{left: "13"}}
                  //     onCheck={ (e,checked) => {
                  //       this.handleCheck(restaurant, checked)} }
                  //     />
                  //   </div>
                  // }
                  primaryText={i+1 + '. ' + restaurant.name}
                  secondaryText={'# Reviews: ' + restaurant.review_count + ' | Rating: ' + restaurant.rating + ' | ' + restaurant.categories[0].title}
                  target="_blank"
                  href={restaurant.url}
                />

                <div style={styles.center}>
                  <div style={{display: 'flex', flexDirection: 'row', fontSize: 30}}>
                    <div style ={{width: '100%'}}>
                      <Checkbox 
                        checkedIcon={<ItinIcon />}
                        uncheckedIcon={<ItinIcon />}
                        onCheck={ (e,checked) => {
                          this.handleFavoritedSight(restaurant, checked)} }
                      />
                    </div>
                    <div style ={{width: '100%'}}>
                      <Checkbox 
                        checkedIcon={<MapIcon />}
                        uncheckedIcon={<MapIcon />}
                        onCheck={ (e,checked) => {
                          this.handleCheck(restaurant, checked)} }
                      />
                    </div>           
                  </div>           
                </div>                  


              </div>

            ))}
          </List>
        </Card>
      </div>
    )
  }
}

export default PlacesToEatCard;
