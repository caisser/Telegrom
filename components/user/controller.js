const store = require('./store');

function addUser(name) {
  if (!name) {
    console.error('[messageControler] No hay nombre de usuario');
    return Promise.reject('Los datos son incorrectos');
  }

  const user = {
    name
  };

  return store.add(user);
}

function listUsers(filterUser) {
  return new Promise((resolve) => {
    resolve(store.list(filterUser));
  });
}

function updateUser(id, name) {
  return new Promise((resolve, reject) => {
    if (!id || !name) {
      reject('invalid data');
      return false;
    }
    const result = store.update(id, name);

    resolve(result);
  });
}

function deleteUser(id) {
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
  listUsers,
  updateUser,
  deleteUser
}
