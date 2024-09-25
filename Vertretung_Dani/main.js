// Einzeiliger Kommentar

/*
    Mehrzeiligen
    Kommentar
*/


        /*
            Text..
            Text....
            Soweit wie unten
        */

            var Zahl1 = 5;
            let Zahl2 = 10;
            const Zeichenkette = "Hallo Welt!";
    
            // Global Scope test:
            // function Test() {
            //     let Test123 = 5
            // }
    
            // console.log(Test123);

let undefiniert = undefined;
let NullWerte = null;

// Muss kein Wert haben
let KeinWert;

let text1 = "What a very nice ";
text1 += "nice day";

// Konsolenausgabe:
console.log(text1);

// Webseitenausgabe
document.write("<strong>"+ text1 + "</strong>");

// ``
document.write(`<i>${text1}</i>`);

// Erstell 2 Variablen vom Typ "INT"
// Weise denen den Wert 10 und 50 zu
// Dann die Variablen addieren und auf der Konsole und Webseite ausgeben

   

// typeof
console.log(typeof(text1));


// Functions
function Addieren(zahl1, zahl2) {
    ergebnis = zahl1 + zahl2;
    return ergebnis;
}

// Aufruf
console.log(Addieren(Zahl1, Zahl2));




// BruttoRechner
function BruttoRechner(netto) {
    return netto * 1.19;
}

let nettoBetrag = 125.00;
document.write("<br>");
document.write(BruttoRechner(nettoBetrag) + " €");

