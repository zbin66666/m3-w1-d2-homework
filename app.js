const express = require('express');
const app = express();
const path = require('path');

// Set up a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'homework_foodblog.html'));
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
