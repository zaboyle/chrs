var createError = require('http-errors');
var express = require('express');

var app = express();

// view engine setup
// use ejs instead of jade
//changed from jade
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('views'));

// ==================================================== //
//                     ROUTES                           //
// ==================================================== //
app.get('/', (req, res) => {
  // TODO: pass in user to display their jobs
  res.render('home');
});

app.get('/groups', (req, res) => {
  // TODO: pass in the user to display user's groups
  res.render('groups');
});

app.get('/account', (req, res) => {
  // TODO: pass in the user to display user's accoutn
  res.render('account');
});

app.get('/settings', (req, res) => {
  // TODO: pass in the user to display user's personal settings
  res.render('settings');
});

app.get('*', (req, res) => {
  // TODO: pass in the user to display user's personal settings
  res.render('error');
});

// listen on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('serving chrs webapp');
});