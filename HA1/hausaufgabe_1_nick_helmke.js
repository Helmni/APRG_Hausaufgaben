//User erstellen und in liste adden

let user = [
    {name : "Alice", password :  "§$Y45/912v"},
    {name : "Bob", password : "secret"},
    {name : "Carla", password : "123"},
    {name : "David", password : "diva D"}
];

//Login Nachrichten
const korrLog   = "Anmeldung Erfolgreich!";
const pwFehlt   = "Anmeldung Fehlgeschlagen, Passwort fehlt!";
const pwFalsch  = "Anmeldung Fehlgeschlagen, Passwort falsch!";
const userFehlt = "Anmeldung Fehlgeschlagen, Benutzername fehlt!";
const userUnb   = "Anmeldung Fehlgeschlagen, Benutzername unbekannt!";

//Login Tests
console.log(login("Bob", "secret"));                //Korrekter Login
console.log(login("Alice", ""));                    //Passwort Fehlt
console.log(login("Alice", "secret"));              //Passwort falsch
console.log(login("SomeUser", "gutesPasswort"));    //Unbekannter Benutzername
console.log(login("", "gutesPasswort2"));           //Benutzername Fehlt

//Login-Funktion 
function login(username, password){
    //zur speicherung ob eingegebener Benutzter vorhanden ist
    let nameEnthalten = false;
    for (u of user){
        if (password == "" || password == null){
            console.log(pwFehlt);
            return false;
        }
        else if (username == "" || username == null){
            console.log(userFehlt);
            return false;
        }
        //Check ob Benutzername vorhanden ist
        else if (u.username == username){
            //Check ob pw vom benutzer richtig ist
            if (u.password == password){
                console.log(korrLog);
                return true;
            }
            //Wenn pw falsch aber Benutzer vorhanden ist wird ensprechend gespeichert
            else{
                nameEnthalten = true;
            }
        }
    }
    if (nameEnthalten == true){
        console.log(pwFalsch);
        return false;
    }
    else{
        console.log(userUnb);
        return false;
    }
}
