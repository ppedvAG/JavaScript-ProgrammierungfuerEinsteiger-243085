// Formular und Tabelle referenzieren
const form = document.getElementById('table-form');
const tabelle = document.getElementById('daten-tabelle').getElementsByTagName('tbody')[0];

// EventListener für das Formular
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    // Eingabewerte holen
    const name = document.getElementById('name').value;
    const alter = document.getElementById('alter').value;

    // Neue Zeile erstellen
    const neueZeile = tabelle.insertRow();

    // Zellen für Name und Alter hinzufügen
    const nameZelle = neueZeile.insertCell(0);
    const alterZelle = neueZeile.insertCell(1);
    const aktionenZelle = neueZeile.insertCell(2);

    // Name und Alter in die Zellen eintragen
    nameZelle.textContent = name;
    alterZelle.textContent = alter;

    // Löschen-Button ist die letzte Zelle einfügen
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Löschen';
    deleteButton.classList.add('delete-btn');
    aktionenZelle.appendChild(deleteButton);

    // Eventlistener für den Löschen-Button
    deleteButton.addEventListener('click', function () {
        tabelle.deleteRow(neueZeile.rowIndex - 1); // Die Zeile löschen
    });

    // Formular zurücksetzten
    form.reset();

})

/*
Anforderungen:

HTML: Erstelle ein Eingabeformular, das es dem Nutzer erlaubt, ein Bankkonto mit Namen und Startguthaben zu erstellen.
CSS: Gestalte das Formular und die Anzeige des Kontostands übersichtlich.

JavaScript: Erstelle eine Klasse Bankkonto mit den Eigenschaften:
name: Name des Kontoinhabers
kontostand: Startguthaben

Methoden:
einzahlen(betrag): Erhöht den Kontostand um den Betrag.
abheben(betrag): Verringert den Kontostand, wenn genug Geld vorhanden ist.
kontostandAnzeigen(): Zeigt den aktuellen Kontostand an.

*/