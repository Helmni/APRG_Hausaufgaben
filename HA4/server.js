//Hausaufgabe von Nick Helmke Woche 4
//INIT express
const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));

//INIT EJS
app.engine(".ejs", require("ejs").__express);
app.set("view engine", "ejs");

//INIT SQLITE3
const DATABASE = "studierende.db";
const db = require("better-sqlite3")(DATABASE); 

//Started den Webserver
app.listen(3000, function(){
    console.log("listening on 3000");
});

app.get("/addstudies", function(req,res){
    res.sendFile(__dirname + "/views/addstudies.html")
});

app.get("/studierende", function(req,res){
    const rows = db.prepare("SELECT * FROM studierende").all();
    res.render("studierende", {"studierende": rows});
});

app.post("/addstudieren", function(req,res){
    const matrikelnum = req.body.matrikelnum;
    const Vname = req.body.Vname;
    const Nname = req.body.Nname;
    const email = req.body.email;
    const semester = req.body.semester;
    //SQL Befehl
    res.render("studierende");
});
    



