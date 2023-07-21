const express = require('express');
const path = require ('path');
const app = express();


// Set up a route to serve the index.html file
app.get('/views', (req, res) => {
  res.render('content');
});
app.set('views',path.join(__dirname,'view'));
app.set('view engine', 'pug');

app.listen(3000);