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

  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM list', (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
        console.log(results)
        res.send(results)
      }
    })
  })

 });


app.post('/api/cows', jsonParser, (req, res) => {

  return new Promise((resolve, reject) => {
    let name = req.body.name;
    let desc = req.body.description;

    let query = `INSERT INTO list(name, description) VALUES(?, ?)`;
    let values = [name, desc];

    connection.query(query, values, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })


  // this is the functionality that needs to be added to the post request portion of ajax on client -----

  // .then((data) => {
  //   connection.query('SELECT * FROM list', (err, results, fields) => {
  //     if (err) {
  //       console.log('err')
  //     } else {
  //       res.send(results)
  //     }
  //   })
  // })


})

//

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})