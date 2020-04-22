//require packages
var express = require("express");
var path = require('path')

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes to the site
require("./app/routing/apiRoutes")(app);
require("./app/routing/html.Routes")(app);

// For serving of static CSS
app.use(express.static(__dirname + "/app/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
