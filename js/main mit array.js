let eingabeFelder = ['tfNote1','tfNote2','tfNote3','tfNote4','tfNote5','tfNote6'] //Array hinzugefügt
let noten = [];
let summe = 0;
let anzahlNoten = 0;
let ergebnis;
let aktuelleEingabe;
function tfAuslesen() {

    summe = 0
    anzahlNoten = 0

    for (let i = 0; i < eingabeFelder.length; i++) { //Schleife hinzugefügt
        aktuelleEingabe = parseInt(document.getElementById(eingabeFelder[i]).value);
        eingabeUeberpruefen(aktuelleEingabe)
    }

    ergebnis = summe / anzahlNoten;

    document.getElementById("ausgabe").innerHTML = ergebnis; //Ausgabe des Ergebnis

    if (ergebnis > 9.9)
    {
        document.getElementById("ausgabe").style.color = "green" //Grüne Anzeige wenn Punkte über 10 sind
    }
    else
    {
        document.getElementById("ausgabe").style.color = "orange" //Gelbe/Orange Anzeige wenn Punkte unter 10 sind
    }
    if (ergebnis < 5)
    {
        document.getElementById("ausgabe").style.color = "crimson" //Rote Anzeige wenn Punkte unter 5.0 sind
    }
}

function eingabeUeberpruefen(punkte) {
    if (isNaN(punkte)) {
        console.log("Keine Zahl"); //gibt ,,Keine zahl" aus, wenn keine Zahl in die Felder eingetragen wird
    }
    else
    {
            anzahlNoten = anzahlNoten + 1;
            summe = summe + punkte;
    }
}










