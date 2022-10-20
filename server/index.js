const bodyParser = require('body-parser');
const path = require('path')

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: true }));


const port = 8080;


var jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', jsonParser, (req, res) => {
  console.log(req.body);
  res.send(req.body)


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})