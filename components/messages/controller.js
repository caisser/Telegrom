const { socket }  = require('../../socket');
const store = require('./store');

function addMessage(user, message, chat, file) {
  return new Promise((resolve, reject) => {
    if (!user || !message || !chat) {
      console.error('[messageControler] No hay chat usuario o mensaje');
      return reject('Los datos son incorrectos');
    }

    let fileUrl = '';
    if (file) {
      fileUrl = 'http://localhost:3000/app/files/' + file.filename;
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl
    };

    store.add(fullMessage);

    socket.io.emit('message', fullMessage);

    return resolve(fullMessage);
  });
}

function listMessages(filterUser) {
  return new Promise((resolve) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise((resolve, reject) => {
    if (!id || !message) {
      reject('invalid data');
      return false;
    }
    const result = store.update(id, message);

    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('invalid data');
      return false;
    }
    store.delete(id)
    .then(() => {
      resolve();
    })
    .catch(e => {
      reject(e);
    });
  });
}

module.exports = {
  addMessage,
  listMessages,
  updateMessage,
  deleteMessage
}
