const bodyParser = require('body-parser');
const path = require('path')

const express = require('express');
const app = express();

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, '../index.html');

app.use(express.static(DIST_DIR));

app.use(bodyParser.urlencoded({ extended: true }));


const port = 8080;


var jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  console.log('is this thing working')
  res.send('I think its working')
  // res.sendFile(HTML_FILE);
 });


app.post('/api', jsonParser, (req, res) => {
  console.log(req.body);
  res.send(req.body)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})