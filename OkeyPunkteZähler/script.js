let scores = [0, 0, 0, 0];
let playerNames = ["Spieler 1", "Spieler 2", "Spieler 3", "Spieler 4"];

// Spiel starten – Namen und Punkte übernehmen
function startGame() {
    // Namen einlesen
    playerNames[0] = document.getElementById("name1").value.trim() || "Spieler 1";
    playerNames[1] = document.getElementById("name2").value.trim() || "Spieler 2";
    playerNames[2] = document.getElementById("name3").value.trim() || "Spieler 3";
    playerNames[3] = document.getElementById("name4").value.trim() || "Spieler 4";

    // Anfangspunkte einlesen
    const startPoints = parseInt(document.getElementById("start-points").value) || 0;
    scores = [startPoints, startPoints, startPoints, startPoints];

    // Namen in Überschriften eintragen
    document.getElementById("header1").innerText = playerNames[0];
    document.getElementById("header2").innerText = playerNames[1];
    document.getElementById("header3").innerText = playerNames[2];
    document.getElementById("header4").innerText = playerNames[3];

    document.getElementById("btn-header1").innerText = playerNames[0];
    document.getElementById("btn-header2").innerText = playerNames[1];
    document.getElementById("btn-header3").innerText = playerNames[2];
    document.getElementById("btn-header4").innerText = playerNames[3];

    document.getElementById("proto-header1").innerText = playerNames[0];
    document.getElementById("proto-header2").innerText = playerNames[1];
    document.getElementById("proto-header3").innerText = playerNames[2];
    document.getElementById("proto-header4").innerText = playerNames[3];

    // Setup ausblenden, Spiel einblenden
    document.getElementById("setup-section").classList.add("hidden");
    document.getElementById("game-section").classList.remove("hidden");

    // Punkte anzeigen
    updateDisplay();

    // Protokoll leeren
    document.querySelector("#punkteliste tbody").innerHTML = "";
}

// Neues Spiel (zurück zum Setup)
function newGame() {
    document.getElementById("setup-section").classList.remove("hidden");
    document.getElementById("game-section").classList.add("hidden");
}

// Anzeige aktualisieren
function updateDisplay() {
    document.getElementById("display01").innerText = scores[0];
    document.getElementById("display02").innerText = scores[1];
    document.getElementById("display03").innerText = scores[2];
    document.getElementById("display04").innerText = scores[3];
}

// Punkte aktualisieren und Protokoll eintragen
function updateScores(winnerIndex, pointsToSubtract, subtractFromWinner = false) {
    const table = document.getElementById("punkteliste");
    const row = table.insertRow(-1);

    let description = "";
    if (pointsToSubtract === 1) description = "Göstergelik";
    else if (pointsToSubtract === 2) description = "Normal Bitiş";
    else if (pointsToSubtract === 4) description = "Okey Bitiş";
    description += ` – ${playerNames[winnerIndex]} gewinnt`;
    row.insertCell(0).innerText = description;

    for (let i = 0; i < 4; i++) {
        let newScore = scores[i];
        if (i !== winnerIndex || subtractFromWinner) {
            newScore = Math.max(0, scores[i] - pointsToSubtract);
            scores[i] = newScore;
        }
        row.insertCell(i + 1).innerText = newScore;
    }

    updateDisplay();
}

// Alle Button-Funktionen
function gostergelik01() { updateScores(0, 1, false); }
function normalbitis01() { updateScores(0, 2, false); }
function okeybitis01() { updateScores(0, 4, false); }

function gostergelik02() { updateScores(1, 1, false); }
function normalbitis02() { updateScores(1, 2, false); }
function okeybitis02() { updateScores(1, 4, false); }

function gostergelik03() { updateScores(2, 1, false); }
function normalbitis03() { updateScores(2, 2, false); }
function okeybitis03() { updateScores(2, 4, false); }

function gostergelik04() { updateScores(3, 1, false); }
function normalbitis04() { updateScores(3, 2, false); }
function okeybitis04() { updateScores(3, 4, false); }