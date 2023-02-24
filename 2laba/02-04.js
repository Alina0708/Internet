const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 5000;

const requestListener = function (req, res) {
    if(req.url === '/xmlhttprequest'){
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
    }

        if (req.url === '/api/name') {
            res.setHeader("Content-Type", "text/plain; charset=utf8");
            res.writeHead(200);
            return  res.end('Севрюк Алина Эдуардовна');
          }
  
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}/xmlhttprequest`);
});