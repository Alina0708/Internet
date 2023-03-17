const http = require("http");
const url = require('url');
const host = 'localhost';
const port = 5000;
const fs = require('fs');

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

 const requestListener = (req, res)=> {
    const query = url.parse(req.url, true).query;
    const k = parseInt(query.k);
  
    if (req.method === 'GET' && req.url.startsWith('/fact') && !isNaN(k)) {
      const fact = factorial(k);
      const response = {
        k: k,
        fact: fact
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    } 
    else if (req.method === 'GET' && req.url === '/') {
        fs.readFile('1.html', 'utf8', (err, data) => {
          if (err) {
            res.end('Internal Server Error');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
          }
        });
      } 
    else {
      res.end('404 Not Found');
    }

        
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    //http://localhost:5000/fact?k=3
    console.log(`Server is running on http://${host}:${port}`);
});