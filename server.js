require('dotenv').config();


const { match } = require('assert');
const { config } = require('dotenv');
const http = require("http");
const host = process.env.host || "localhost2";
const port = process.env.port || 6000;

// Frasi
const frasi = [
    "Benvenuto nel nostro sito!",
    "Oggi è una giornata fantastica!",
    "Il tempo è perfetto per un'avventura.",
    "Speriamo che tu stia avendo una splendida giornata.",
    "Continua a esplorare e a imparare nuove cose!",
    "Grazie per aver visitato la nostra pagina.",
    "Rimani positivo e segui i tuoi sogni.",
    "Non dimenticare di sorridere oggi!",
    "La conoscenza è il potere più grande.",
    "Ogni giorno è una nuova opportunità."
];



http
    .createServer(function (req, res) {

        // Funzione per prendere una frase casuale

        const fraseCasuale = frasi[Math.floor(Math.random() * frasi.length)]
        console.log(Math.floor(Math.random() * frasi.length))

        res.writeHead(200, {
            "content-Type": "text/html; charset=utf-8"
        });
        res.end(
            `<h1 style="color: red;">L'host: ${host}</h1>
            <h1 style="color: red;">La porta: ${port}</h1>
            <h1> ${fraseCasuale}</h1>`    
    );  
    })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`
    })