
// Moderne Variante des Konstruktors
// ist syntactic Sugar, d.h. es ist eine rein syntaktische Verbesserung mit keiner Änderung an der Funktionalität

// Mit dem keyword class

class PersonAlt {
    static nextId = 1; // Eine statische Eigenschaft zur verwaltung von ID´s
    xyz = 124;
    constructor(nameProp, age, employed, cityofOrigin) {
        this.id = PersonAlt.nextId++;
        this.name = nameProp;
        this.age = age;
        this.employed = employed;
        this.cityofOrigin = cityofOrigin
    }
    introduceSelf() {
        this.xyz += this.age;
        console.log(`Hallo mein Name ist ${this.name} und ich bin ${this.age} Jahre alt ${this.xyz}`);
        console.log(`ID: ${this.id}`);
    }



}

const person3 = new PersonAlt("Christian Lindner", 52, true, "Cologne");
const person4 = new PersonAlt("Olaf Scholz", 65, true, "Osnabrück");

person3.introduceSelf();
person4.introduceSelf();

// Übung:
// Erstelle eine Klasse Auto
// Sie soll folgende Props besitzen:
// marke
// modell
// motorStatus (boolean)
// derzeitigeGeschw
// maximalGeschw

// derzeitige Geschwindigkeit soll bei der erstellung immer 0 sein
// motorStatus soll bei der Erstellung immer false sein

// Methoden:
// anAbschalten
// Die Methode soll nur den motorStatus ändern
// Beschleunige(neueGeschw)
// Diese Methode soll die derzeitige Geschwindigkeit auf neueGeschw setzen, außer wenn diese die maximale
// Geschwindigkeit überschreiten würde
