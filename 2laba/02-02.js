const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 5000;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/pic.png")
        .then(contents => {
            res.setHeader("Content-Type", 'image/png');
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
        
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}/png`);
});