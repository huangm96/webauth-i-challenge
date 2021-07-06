
const bcrypt = require("bcryptjs");
const authModel = require("./auth-model.js");

module.exports = {
  authInfo,
  protected
};

function authInfo(req, res, next) {
  if (!req.body.userName || !req.body.password) {
    res.status(400).json({ message: "Please provide credentials" });
  } else {
    next();
  }
}


function protected(req, res, next) {
//   const userName = req.header("userName");
//   const password = req.header("password");

//   if (userName && password) {
//     authModel.findUserAuthByUserName(userName).then(user => {
//       if (user && bcrypt.compareSync(password, user.password)) {
//         next();
//       } else {
//         res.status(401).json({ message: "You cannot pass!" });
//       }
//     });
//   } else {
//     res.status(400).json({ message: "please provide credentials" });
//   }
    if (req.session && req.session.username) {
        next();
    } else {
        res.status(401).json({ message: "You cannot pass!" });
    }
}