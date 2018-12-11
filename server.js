var express = require("express");
var dotenv = require("dotenv").config();

var PORT = process.env.PORT || 3000;

var app = express();


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var handlebars = require("express-handlebars");


app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, () => console.log("Server listening on PORT " + PORT));