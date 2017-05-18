const express = require('express');
const router = express.Router();
const request = require('request');
const yelp = require('yelp-fusion');

module.exports.getYelp = function(req, res) {
  //Yelp Fusion's OAuth 2.0 credentials https://www.yelp.com/developers/v3/manage_app
  const clientId = '0jgaCvkiiSDmlRChqiBxdw';
  const clientSecret = 'YymoKgxeD7oOKZNI4Musd0iKqdLVi8pUbRWidhwSDRN9n6W7JR5YD96BsT6cGhEP';

  console.log(req.query);
  const searchRequest = {
    term:'food',
    location: req.query.location,
    limit: 10,
    sort_by: 'review_count'
  };

  // yelp.accessToken(clientId, clientSecret)
  //   .then(response => {
  //     const client = yelp.client(response.jsonBody.access_token);

  //     client.search(searchRequest).then(response => {
  //       const searchResults = response.jsonBody.businesses;
  //       const prettyJson = JSON.stringify(searchResults, null, 4);
  //       res.send(searchResults);
  //     });
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });

  // res.end('hi from Yelp')
};

module.exports.getFourSquare = function(req, res) {

  var url = 'https://api.foursquare.com/v2/venues/explore?oauth_token=4MVKT2MMAUFFFU3FODWZEU2LLLC4KXPZE0F0NJM0CYCTGHM5&near=san_francisco&limit=10&v=20170517&query=Popular with Visitors&photos=1'

  request.get(url)
    .done( (data) => {
      console.log(data);
    } )
  res.end('hi from FS')
}