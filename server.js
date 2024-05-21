require('dotenv').config();


const { config } = require('dotenv');
const http = require("http");
const host = process.env.host || "localhost2";
const port = process.env.port || 6000;

http
    .createServer(function (req, res) {
        res.writeHead(200, {
            "content-Type": "text/html"
        });
        res.end(
            `<h1 style="color: red;">L'host: ${host}</h1>
            <h1 style="color: red;">La porta: ${port}</h1>`    
    );  
    })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`
    })