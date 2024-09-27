/*

HTML - Struktur des Katalogs:
Erstelle eine Seite mit einem Haupttitel und einem Bereich für den Produktkatalog.
Jedes Produkt hat einen Titel, ein Bild (kann ein Platzhalterbild sein), eine Beschreibung, und einen Preis.
Der Katalog soll drei Produkte anzeigen.

CSS - Stil für den Katalog:
Gestalte den Katalog so, dass er visuell ansprechend ist (Schriftarten, Farben, Boxen um die Produkte, Schatten, etc.).
Die Produkte sollen nebeneinander (im Grid oder Flexbox) dargestellt werden und responsiv sein.
Der Preis eines Produkts soll hervorgehoben sein (z.B. durch Farbe oder Fettdruck).

JavaScript - Dynamische Produktgenerierung:
Erstelle eine Klasse Product, die folgende Eigenschaften hat:
Name des Produkts
Bild des Produkts (URL)
Beschreibung
Preis
Nutze die Klasse, um drei verschiedene Produkte zu erzeugen und dynamisch in den HTML-Katalog einzufügen.

JavaScript - Methoden:
Füge der Klasse Product eine Methode hinzu, die die Produktinformationen (Name, Beschreibung und Preis) auf der Konsole ausgibt.
Die Methode soll bei der Erstellung des Produktes automatisch ausgeführt werden.
*/


class Katalog {
    static nextid = 1
    id = Katalog.nextid++

    constructor(Produkt, Bild, Beschreibung, Preis) {
        this.produkt = Produkt
        this.bild = Bild
        this.beschreibung = Beschreibung
        this.preis = Preis
    }

    anzeige() {
        console.log(this.produkt)
        console.log(this.beschreibung)
        console.log(this.preis)
    }

    // Methode, um das Produkt in HTML umzuwandeln und zur Liste hinzuzufügen
    render() {
        const Lst = document.getElementById('Angebote');

        // Erstelle das 'li'-Element
        const li = document.createElement('li');

        // Erstelle das HTML für das Produkt
        li.innerHTML = `
            <h2>${this.produkt}</h2>
            <img src="${this.bild}" alt="${this.produkt}">
            <p>${this.beschreibung}</p>
            <p id="preis">${this.preis.toLocaleString()} €</p>
        `;

        // Füge das erstellte 'li'-Element der Liste hinzu
        Lst.appendChild(li);
    }
}

// Erstelle die Produkte
let waldsee = new Katalog(
    "Waldsee",
    "/2148992406.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi, amet ab inventore repellendus saepe pariatur vitae earum, nostrum non delectus aliquid nobis. Corrupti minus aperiam optio aliquid vitae amet consequatur saepe voluptate quibusdam, cum, quis veniam dolorem iusto veritatis.",
    75000
);

let strandhaus = new Katalog(
    "Strandhaus",
    "/pexels-thao-huynh-vo-276312182-13009594.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sit voluptatibus ratione commodi error nam? Non, similique aliquid modi a aliquam ea repudiandae neque tenetur corporis distinctio vitae pariatur corrupti rem eum reprehenderit eius quidem.",
    225000
);

let berghütte = new Katalog(
    "Berghütte",
    "/pexels-pixabay-147411.jpg",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque voluptatem exercitationem dignissimos fugit maiores enim ad sit expedita perspiciatis. Tenetur rerum, debitis sit atque quia blanditiis magnam sequi, laudantium officiis maxime excepturi perspiciatis! Nam laboriosam laudantium dicta obcaecati id dolorum nobis sit eius debitis deleniti?",
    168000
);

// Füge die Produkte zur Seite hinzu
waldsee.render();
strandhaus.render();
berghütte.render();