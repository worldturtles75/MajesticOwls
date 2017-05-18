const express = require('express');
const router = express.Router();
const request = require('request');
const yelp = require('yelp-fusion');

module.exports.getYelp = function(req, res) {
  //Yelp Fusion's OAuth 2.0 credentials https://www.yelp.com/developers/v3/manage_app
  const clientId = '0jgaCvkiiSDmlRChqiBxdw';
  const clientSecret = 'YymoKgxeD7oOKZNI4Musd0iKqdLVi8pUbRWidhwSDRN9n6W7JR5YD96BsT6cGhEP';
  const searchRequest = {
    term:'food',
    location: req.query.location,
    limit: 10,
    sort_by: 'review_count'
  };
  
  const getYelp = new Promise((resolve, reject) => {
    yelp.accessToken(clientId, clientSecret)
      .then(response => {
        const client = yelp.client(response.jsonBody.access_token);
        client.search(searchRequest).then(response => {
          const searchResults = response.jsonBody.businesses;
          const prettyJson = JSON.stringify(searchResults, null, 4);
          resolve(searchResults);
        });
      })
      .catch(e => {
        console.log(e);
      });
  });
  getYelp.then(searchResults => {
    console.log(searchResults, "PROMISE SEARCH RESULT")
    // Destination.create({
    //   destination: req.query.location,
    //   toptenEats: searchResults
    // }), function(err, data){
    //   if (err){
    //     console.log(err)
    //   } else {
    //     console.log("Successfully entered")
    //   }
    // };
    res.send(searchResults)
  });
}

module.exports.getFourSquare = function(req, res) {

  const token = '4MVKT2MMAUFFFU3FODWZEU2LLLC4KXPZE0F0NJM0CYCTGHM5'
  const location = req.query.location;

  const getData = new Promise((resolve, reject) => {
    var url = `https://api.foursquare.com/v2/venues/explore?oauth_token=${token}&near=${location}&limit=10&v=20170517&query=Popular with Visitors&photos=1`
    request.get(url, (err, result) => {
      resolve(result);
    })
  });

  getData.then( result => {
    //AGNES's DB WRITE CODE GOES HERE


    res.send(result.body)
  } );
};