const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

db.connect('mongodb+srv://db_user:sa@learningcluster.by7yz.mongodb.net/telegrom');

const app = express();
const port = 3000;

app.use(bodyParser.json());
//app.use(router);
router(app);

app.use('/app', express.static('public'));

app.listen(port, () => {
  console.log('listening on: http://localhost:3000/');
});


