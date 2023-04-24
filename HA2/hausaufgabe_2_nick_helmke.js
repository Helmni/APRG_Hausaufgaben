const express = require("express");
const app = express();

function accessWebsite(req, res){
    res.sendFile(__dirname + "/hausaufgabe_2_nick_helmke.html")
}
app.get("/Hausaufgabe_w2", accessWebsite);

//Started den Webserver
app.listen(3000, function(){
    console.log("listening on 3000");
});