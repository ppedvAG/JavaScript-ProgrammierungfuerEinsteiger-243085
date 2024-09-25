// If-Abfrage

if(10 > 5) {
    document.write("<br><br> Die Zahl 10 ist größer als 5");
}

// If else
if(10 < 5) {
    document.write("<br><br> Die Zahl 10 ist größer als 5");
} else {
    document.write("<br><br> Die Zahl 10 ist nicht kleiner als 5");
}

// Ternäre Operator
var zahl = 5;
(zahl == 5) ? document.write("Wahr!") : document.write("Falsch!");

// If / else-if / else
if (10 < 1) {
    document.write("Die Zahl 10 ist nicht kleiner als 1");
}
else if (10 == 10) {
    document.write("<br><br> Die Ausgabe stimmt so:")
} else {
    document.write("Hey ich bin der Notausgang!");
}

// alert("Hallo");

// Case-Fall
var numberOne = 10;
switch(numberOne) {
    case (numberOne = 1):
        document.write("Zahl ist 1");
        break;
    case (numberOne = 10):
        document.write("Zahl ist 10");
        break;
    case (numberOne = 40):
        document.write("Zahl ist 40");
        break;
    default:
        document.write("Zahl ist ungültig");
}

// For-Schleife:
for(var i = 0; i < 5; i++) {
    console.log(i);
}

// While-Schleife:
var y = 0;
while(y < 5) {
    console.log(y);
    y++;
}