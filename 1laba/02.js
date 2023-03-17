const http = require("http");
const host = 'localhost';
const port = 8000;


const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);

res.write(`<p>Method: ${req.method}</p>`);
res.write(`<p>URI: ${req.url}</p>`);
res.write(`<p>Version: ${req.httpVersion}</p>`);
res.write(`<p>Headers: ${JSON.stringify(req.headers)}</p>`);
res.write(`<p>Body: ${JSON.stringify(req.body)}</p>`);

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});