// Hilfsfunktion: Punkte aktualisieren und neue Zeile in der Tabelle anzeigen
function updateScores(winnerIndex, pointsToSubtract, subtractFromWinner = false) {
    const scores = [
        document.getElementById("score01"),
        document.getElementById("score02"),
        document.getElementById("score03"),
        document.getElementById("score04")
    ];

    const table = document.getElementById("punkteliste");
    const row = table.insertRow(-1); // Am Ende einfügen

    // Erste Zelle: Beschreibung der Aktion
    const descCell = row.insertCell(0);
    let description = "";
    if (pointsToSubtract === 1) description = "Göstergelik (normal)";
    else if (pointsToSubtract === 2) description = "Normal Bitiş";
    else if (pointsToSubtract === 4) description = "Okey Bitiş";
    else description = `-${pointsToSubtract} Punkte`;

    if (winnerIndex !== null) {
        description += ` – Spieler ${winnerIndex + 1} gewinnt`;
    }
    descCell.innerHTML = description;

    // Punkte abziehen und in Tabelle anzeigen
    for (let i = 0; i < scores.length; i++) {
        let currentScore = parseInt(scores[i].value) || 0;

        // Nur abziehen, wenn nicht Gewinner ODER wenn subtractFromWinner true ist
        if (i !== winnerIndex || subtractFromWinner) {
            currentScore = Math.max(0, currentScore - pointsToSubtract);
            scores[i].value = currentScore; // Input-Feld aktualisieren
        }

        // Zelle mit aktuellem Punktestand erstellen
        const cell = row.insertCell(i + 1);
        cell.innerHTML = currentScore;
        cell.style.textAlign = "center";
    }
}

// Göstergelik: Spieler 1 gewinnt, alle anderen verlieren 1 Punkt
function gostergelik01() {
    updateScores(0, 1, false);
}

// Normal Bitiş: Spieler 1 gewinnt, alle anderen verlieren 2 Punkte
function normalbitis01() {
    updateScores(0, 2, false);
}

// Okey Bitiş: Spieler 1 gewinnt mit Okey → ALLE verlieren 4 Punkte (inkl. Gewinner!)
function okeybitis01() {
    updateScores(0, 4, false); // alle anderen verlieren 4 Punkte
}