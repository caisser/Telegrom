const store = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageControler] No hay usuario o mensaje');
      return reject('Los datos son incorrectos');
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date()
    };

    store.add(fullMessage);

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
