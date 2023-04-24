//Hausaufgabe von Nick Helmke Woche 3
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

//Liste mit den Usern
let users = [
    {name: "Alice", email : "Alice@123.de", password :  "§$Y45/912v"},
    {name: "Bob", email : "Bob@bcd.com", password : "secret"},
    {name: "Carla", email : "Carla@567.com", password : "123"},
    {name: "David", email : "David@xyz.de", password : "diva D"}
];

app.post("/logginIn", function(req,res){
    const email = req.body.email;
    const passwort = req.body.passwort;
    login(email, passwort, res);
});

app.post("/registered", function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const passwort = req.body.passwort;
    const passwortW = req.body.passwortW;
    register(name, email, passwort, passwortW, res);
});

function login(email, passwort, res){
    for (u of users){
        if (u.email == email && u.password == passwort){
            res.render("loginSuccess", {"name": u.name});
            return true;
        }
    }
    res.render("loginFailed");
}

function register(name, email, passwort, passwortW, res){
    //Könnte auch nicht veschachtelt gemacht werden, würde aber eine sehr lange if abfrage benötigen deswegen der übersicht halber so
    if (passwort == passwortW && passwort != "" && passwort != null){
        if (name != "" && name != null){
            if (email != "" && email != null && email.includes("@")){
                users[users.length] = {name: name, email : email, password : passwort};
                res.render("registerSuccess", {"email": email, "name": name});
                return true
            }
        }
    }
    res.render("registerFailed");
}