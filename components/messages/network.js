const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');


router.get('/',(req, res) => {
  res.header({ "custom-header": "Hola header",
    "iwiwiw": "assadsd"
  });
  response.success(req, res, 'Lista de mensajes');
});

router.post('/',(req, res) => {

  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(() => {
      response.error(req, res, 'Informacion invalida', 400);
    });
});


module.exports = router;
