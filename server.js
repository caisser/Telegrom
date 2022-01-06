const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
//app.use(router);
router(app);

app.use('/app', express.static('public'));

app.listen(port, () => {
  console.log('listening on: http://localhost:3000/');
});


