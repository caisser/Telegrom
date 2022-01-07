const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');


router.get('/',(req, res) => {
  const filterMessages = req.query.user || null;
  controller.listMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200)
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error' + err, 500);
    });
});

router.post('/',(req, res) => {

  controller.addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error' + err, 500);
    });
});

router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, 'Error interno: ' + e, 500);
    });
});

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, 'Mensaje eliminaro', 200);
    })
    .catch(e => {
      response.error(req, res, 'Error interno: ' + e, 500);
    });
});

module.exports = router;
