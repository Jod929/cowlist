const bodyParser = require('body-parser');
const path = require('path')
const connection = require('../db/index.js');

const express = require('express');
const app = express();

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, '../index.html');

app.use(express.static(DIST_DIR));

app.use(bodyParser.urlencoded({ extended: true }));


const port = 8080;


var jsonParser = bodyParser.json();

app.get('/api/cows', (req, res) => {
  connection.query('SELECT * FROM list', (err, results, fields) => {
    if (err) throw err;

    console.log(results)
  })
  console.log('is this thing working')
  res.send('I think its working')
  // res.sendFile(HTML_FILE);
 });


app.post('/api/cows', jsonParser, (req, res) => {

  let name = req.body.name;
  let desc = req.body.description;

  let query = `INSERT INTO list(name, description) VALUES(?, ?)`;
  let values = [name, desc];

  connection.query(query, values, (err, results, fields) => {
    if (err) throw err;

    console.log('the data is ', results);
  })

  res.send(req.body)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})