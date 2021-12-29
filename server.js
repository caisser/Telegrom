const express = require('express');

const app = express();
const port = 3000;

app.use('/', (req, res) => {
  res.send('Holaaaa');
});

app.listen(port, () => {
  console.log('listening on: http://localhost:3000/');
});


