
require('babel-register')({ presets: ['react'] });
var express = require('express')
var app = express()

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Container = require('./components/Container.jsx');

var path    = require("path");

// needed to work with the ejs files
// npm install ejs --save must be initiated before using this.
//app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, 'dist')))

// route handling at /
app.get('/', function(req,res){

   const content = ReactDOMServer.renderToString(
         React.createElement(Container)
      )

  res.send(content);

});

// handling route at port 3000
//like this: localhost:3000/ 
const PORT = 3000;
app.listen(PORT, function(){
   console.log("You are now connected to the server at port: " + PORT);
});