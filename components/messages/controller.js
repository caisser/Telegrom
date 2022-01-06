

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

    console.log(fullMessage);
    return resolve(fullMessage);
  });
}

module.exports = {
  addMessage
}
