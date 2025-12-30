// Aktuelle Punkte (zentral gespeichert)
let scores = [0, 0, 0, 0];

// Anzeige der großen Punkte-Tabelle aktualisieren
function updateDisplay() {
    document.getElementById("display01").innerText = scores[0];
    document.getElementById("display02").innerText = scores[1];
    document.getElementById("display03").innerText = scores[2];
    document.getElementById("display04").innerText = scores[3];
}

// Hauptfunktion: Punkte abziehen, Protokoll eintragen, Anzeige aktualisieren
function updateScores(winnerIndex, pointsToSubtract, subtractFromWinner = false) {
    const table = document.getElementById("punkteliste");
    const row = table.insertRow(-1);

    // Beschreibung der Aktion
    let description = "";
    if (pointsToSubtract === 1) description = "Göstergelik";
    else if (pointsToSubtract === 2) description = "Normal Bitiş";
    else if (pointsToSubtract === 4) description = "Okey Bitiş";
    description += ` – Spieler ${winnerIndex + 1} gewinnt`;
    row.insertCell(0).innerText = description;

    // Punkte berechnen und in Protokoll eintragen
    for (let i = 0; i < 4; i++) {
        let newScore = scores[i];

        if (i !== winnerIndex || subtractFromWinner) {
            newScore = Math.max(0, scores[i] - pointsToSubtract);
            scores[i] = newScore; // Aktualisiere zentralen Speicher
        }

        row.insertCell(i + 1).innerText = newScore;
    }

    // Große Anzeige oben aktualisieren
    updateDisplay();
}

// Alle 12 Funktionen für die Buttons
function gostergelik01() { updateScores(0, 1, false); }
function normalbitis01() { updateScores(0, 2, false); }
function okeybitis01() { updateScores(0, 4, true); }

function gostergelik02() { updateScores(1, 1, false); }
function normalbitis02() { updateScores(1, 2, false); }
function okeybitis02() { updateScores(1, 4, true); }

function gostergelik03() { updateScores(2, 1, false); }
function normalbitis03() { updateScores(2, 2, false); }
function okeybitis03() { updateScores(2, 4, true); }

function gostergelik04() { updateScores(3, 1, false); }
function normalbitis04() { updateScores(3, 2, false); }
function okeybitis04() { updateScores(3, 4, true); }

// Start: Anzeige initialisieren
updateDisplay();