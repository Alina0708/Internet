const http = require("http");
const url = require('url');
const fs = require('fs');
const host = 'localhost';
const querystring = require('querystring');
const port = 5000;

function factorial(k, callback) {
    if (k < 0) {
      callback(new Error('k < 0'));
      return;
    }
    let result = 1;
    for (let i = 2; i <= k; i++) {
      result *= i;
    }
    process.nextTick(() => {
      callback(null, result);
    });
  }

 const requestListener = (req, res)=> {
    const parsedUrl = url.parse(req.url);
    const queryParams = querystring.parse(parsedUrl.query);
    const k = parseInt(queryParams.k);
    if (req.method === 'GET' && req.url.startsWith('/fact') && !isNaN(k)) {
    if (isNaN(k)) {
      res.statusCode = 400;
      res.end('404');
      return;
    }
    factorial(k, (err, result) => {
      if (err) {
        res.statusCode = 400;
        res.end(err.message);
        return;
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({k, fact: result}));
    });
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