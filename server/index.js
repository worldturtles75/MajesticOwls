const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const User = require('../database/index');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'));
});

// Passport/Auth

passport.use(new GoogleStrategy({
    clientID: process.env.G_ID,
    clientSecret: process.env.G_SECRET,
    callbackURL: process.env.G_URL
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOrCreate({ googleId: profile.id }, (err, user) => {
      return done(err, user);
    });
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
app.get('/auth/google/callback'
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log('Listening on port', port);
});
