const express = require("express");
const app = express();

//Den Ordner "public" freigeben
app.use(express.static(__dirname + "/public"));

//Verknüpft anfrage /hello mit entsprechender Antwort
function callbackfuntion(req, res){
    res.sendFile(__dirname + "/hello.html")
}
app.get("/helloworld", callbackfuntion);

//Alternativ:
app.get("/hello", function(req, res){
    res.send("Hello World") 
});

//Started den Webserver
app.listen(3000, function(){
    console.log("listening on 3000");
});