const http = require("http");
const host = 'localhost';
const port = 5000;
const readline = require('readline');
const prompt=require("prompt-sync")({sigint:true}); 

let state = 'norm';

const rl = readline.createInterface({
  // output: prompt(state + "->", ''),
  input: process.stdin,

});


rl.on('line', (input) => {
  if (input === 'stop')
   {

    newstate = 'stop';
    prompt("req = " + state + "->" + newstate , '');
    state = 'stop';
    prompt(state + "->", '');

  } 
  else if (input === 'test')
   {
    newstate = 'test';
    prompt("req = " + state + "->" + newstate, '');
    state = 'test';
    prompt(state + "->", '');
  } 

  else if (input === 'idle')
   {
    newstate = 'idle';
    prompt("req = " + state + "->" + newstate, '');
    state = 'idle';
    prompt(state + "->", '');
  } 
  else if(input === 'norm')
  {
    newstate = 'norm';
    prompt("req = " + state + "->" + newstate , "");
    state = 'norm';
    prompt(state + "->", '');
  }
  else if (input === 'exit') {
    process.exit(0);
}
else {
    prompt(state + '->');
}
});

const requestListener = function (req, res) {
  res.end(`State: ${state}`);
};

const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});