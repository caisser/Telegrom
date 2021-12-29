const express = require('express');
const router = express.Router();

const app = express();
const port = 3000;

app.use(router);

router.get('/',(req, res) => {
  res.send('Holaaaa');
});

// app.use('/', (req, res) => {
//   res.send('Holaaaa');
// });

app.listen(port, () => {
  console.log('listening on: http://localhost:3000/');
});


