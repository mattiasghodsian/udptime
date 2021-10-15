// Set packages
const dotenv = require('dotenv')
const fnc = require('./functions')
const express = require('express')
var path = require('path')

// Config dotenv
dotenv.config();

const app = express()

// Routes
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.post('/standard', function (req, res) {
  res.send('Not implemented yet..')
})

app.get('/steam/:id/:ip', async function (req, res) {
  const response = await fnc.querySteam(req.params.id, req.params.ip);
  const json = await JSON.stringify(response);

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(json);
})

// Init app
app.listen(process.env.Port, process.env.Host)
console.log(`Running on http://${process.env.Host}:${process.env.Port}`);