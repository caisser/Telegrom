const db = require('mongoose');

db.Promise = global.Promise;
//'mongodb+srv://db_user:sa@learningcluster.by7yz.mongodb.net/telegrom'
async function connect(url) {
  await db.connect(url, {
    useNewUrlParser: true,
  });

  console.log('[db] Conectada con exito');
}

module.exports = { connect };
