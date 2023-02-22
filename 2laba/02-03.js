const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 5000;

const requestListener = function (req, res) {
    
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
            res.writeHead(200);
            res.end("Севрюк Алина Эдуардовна"); 
           
        
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}/api/name`);
});