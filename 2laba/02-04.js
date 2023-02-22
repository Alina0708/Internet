const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 5000;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/xmlhttprequest.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });



      // r = new XMLHttpRequest();
       //r.open("GET", "http://localhost:5000/api/name");
      // r.send();
        
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}/xmlhttprequest`);
});