console.log("Hello World");

//Variablen mit konstante Werte
//Const ist nicht veränderbar
const begruessung = "Moin";
console.log(begruessung);
//begruessung = "Moin2"; würde nicht gehe weil const

//Variablen mit veränderbaren Wert
let wochentag = "Mittwoch";
console.log(wochentag);
wochentag = "Donnerstag";
console.log(wochentag);

//Strings zusammenfuegen
console.log("Heute ist " + wochentag);
//Template Strings
console.log(`Heute ist ${wochentag}!` );

// For schleife
for (let i = 0; i < 4; i++){
    console.log(`${i+1}ter Schleifendurchlauf`)
}

//Verzweigung + Schleife
for (let i = 0; i < 4; i++){
    if ((i+1) % 2 == 0) {
        console.log(`${i+1} ist eine gerade Zahl`)
    } else {
        console.log(`${i+1} ist eine ungerade Zahl`)
    }
}

//Objekte
let fixie = {};
fixie.type = "Fixie";
fixie.gears = 1;
fixie.colour = "Black";
console.log(fixie);

//JSON Java Script Object Notation
let gazelle = {
    type : "Gazelle",
    gears : 5,
    colour : "White"
}
console.log(gazelle);

let user1 = {password : "Password 1"}

//Arrays 
let numbers = [1,4,-3,17,1012];
console.log(numbers);
numbers.push(19);
console.log(numbers);

// for of schleife
for (number of numbers){
    console.log(number)
}
//Funktionen
function addieren(a,b){
    const summe = a + b;
    return summe;
}

console.log(addieren(1,11))