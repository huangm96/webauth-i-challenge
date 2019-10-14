const db = require('../data/dbConfig');


module.exports = {
  findUsersAuth,
  findUserAuthById,
  findUserAuthByUserName,
  addUserAuth
};



function findUsersAuth() {
    return db("usersAuth");
   
}

function findUserAuthById(id) {
    return db("usersAuth")
      .where({ id })
      .first();
}

function findUserAuthByUserName(userName) {
  return db("usersAuth")
    .where({ userName})
    .first();
}

function addUserAuth(userAuth) {
    return db("usersAuth")
      .insert(userAuth, "id")
      .then(ids => {
        const [id] = ids;
        return findUserAuthById(id);
      });
}