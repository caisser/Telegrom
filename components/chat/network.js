const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');


router.get('/:userId',(req, res) => {
  controller.listChats(req.params.userId)
    .then((chat) => {
      response.success(req, res, chat, 200)
    })
    .catch(err => {
      response.error(req, res, 'Unexpected error' + err, 500);
    });
});

router.post('/',(req, res) => {
  controller.addChat(req.body.users)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error' + err, 500);
    });
});

module.exports = router;
