const store = require('./store');

function addUser(name) {
  if (!name) {
    console.error('[messageControler] No hay nombre de usuario');
    return Promise.reject('Los datos son incorrectos');
  }

  const user = {
    name
  };

  return store.add(user);;
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
  addUser,
  listMessages,
  updateMessage,
  deleteMessage
}
