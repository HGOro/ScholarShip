const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

//Hernan's Changes====================================================
// PASSPORT ==========================================================
//Set Up ======
require("dotenv").config();
//Dependencies=============
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session"); // cookie session



const db = require("./models")

//Configuration======================================================
require("./config/passport")(passport); //pass passport for configuration

//configure body parser for AJAX requests
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

//enable CORS so that browsers don't block requests.
app.use((req, res, next)=> {
  //access-control-allow-origin http://localhost:3000
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
//=======================================================================

//serve up static assets ( usually on heroku) ***Hernan changed the client/build route
if (process.env.NODE_ENV === "production"){
  app.use(express.static("../client/build"))
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//session middleware for PASSPORT ========================================
app.use(session({
  key: 'user_sid',
  secret: 'goN6DJJC6E287cC77kkdYuNuAyWnz7Q3iZj8',
  resave: true,
  saveUninitialized: false,
  cookie: {
      expires: 60000 * 60 * 24 * 30,
      httpOnly: false
  }
}));



app.use(passport.initialize());
app.use(passport.session()); //persistent login session
app.use(flash());
//========================================================================


// Add routes, both /api and index
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})

// Start the API server
//Hernan added his sequelize server
//db.sequelize.sync().then(function(){
//  app.listen(PORT, function() {
//    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
//  })
//})


