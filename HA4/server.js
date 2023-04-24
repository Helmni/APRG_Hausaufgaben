//Hausaufgabe von Nick Helmke Woche 4
//INIT express
const express = require("express");
const app = express();

//INIT bodyParser
const bodyParser = require("body-parser");
const { name } = require("ejs");
app.use(bodyParser.urlencoded({extended: true}));

//INIT EJS
app.engine(".ejs", require("ejs").__express);
app.set("view engine", "ejs");

//Started den Webserver
app.listen(3000, function(){
    console.log("listening on 3000");
});

app.get("/login", function(req,res){
    res.sendFile(__dirname + "/views/login.html")
});

app.get("/register", function(req,res){
    res.sendFile(__dirname + "/views/register.html")
});








