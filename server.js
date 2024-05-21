const http = require("http");
const host = process.env.host || "localhost";
const port = process.env.port || 5000;

http
    .createServer(function (req, res) {
        res.writeHead(200, {
            "content-Type": "text/html"
        });
        res.end("<h1 style='color: red;'>Hello World</h1>");
    })
    .listen(port, host, () => {
        const serverUrl = 'http://${host}:${port}'
    })