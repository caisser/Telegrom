const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = 3000;

const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');
const socket = require('./socket');

db.connect('mongodb+srv://db_user:sa@learningcluster.by7yz.mongodb.net/telegrom');

app.use(cors());
app.use(bodyParser.json());

socket.connect(server);
router(app);

app.use('/app', express.static('public'));

server.listen(port, () => {
  console.log('listening on: http://localhost:3000/');
});


