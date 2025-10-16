function inserisci() {
    const fileSelezionato = document.getElementById("selettoreFile").files[0];
    if (!fileSelezionato) return;

    const lettore = new FileReader();

    lettore.onload = function(evento) {
        const testoFile = evento.target.result;
        const datiTemporanei = JSON.parse(testoFile);
        mostraTabella(datiTemporanei);
    };

    lettore.readAsText(fileSelezionato);
}

function mostraTabella(datiPersone) {
    const corpoTabella = document.getElementById("tabellaPersone");
    corpoTabella.innerHTML = "";

    for (let persona of datiPersone) {
        const riga = document.createElement("tr");

        const colNome = document.createElement("td");
        colNome.textContent = persona.nome;

        const colCognome = document.createElement("td");
        colCognome.textContent = persona.cognome;

        const colIndirizzo = document.createElement("td");
        colIndirizzo.textContent = persona.indirizzo;

        const colCitta = document.createElement("td");
        colCitta.textContent = persona.citta;

        const colCap = document.createElement("td");
        colCap.textContent = persona.cap;

        riga.append(colNome, colCognome, colIndirizzo, colCitta, colCap);
        corpoTabella.appendChild(riga);
    }
}

function caricaDaServer() {
    const richiesta = new XMLHttpRequest();
    richiesta.open("GET", "persone.json", true);

    richiesta.onload = function() {
            const elenco = JSON.parse(richiesta.responseText);
            mostraTabella(elenco);
    };

    richiesta.send();
}

