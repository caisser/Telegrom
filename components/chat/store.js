const Model = require('./model');

function addChat(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

async function getChat(userId) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (userId !== null){
      filter = { users: userId }
    }

    Model.find(filter)
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });

  });

}

module.exports = {
  add: addChat,
  list: getChat
}
