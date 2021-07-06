const express = require("express");
const bcrypt = require("bcryptjs");
const authModel = require("./auth-model.js");
const credentials = require('./credentials-middleware');
const router = express.Router();

router.get("/api/users", credentials.protected, (req, res) => {
  authModel
    .findUsersAuth()
    .then(users => {
      if (!users[0]) {
        res.json(null);
      }
      res.json(users);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get users list", error });
    });
});

router.post("/api/register",credentials.authInfo, (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 14);
  req.body.password = hash;

  authModel
    .addUserAuth(req.body)
    .then(() => {
      res.status(201).json({ message: "Accout created!" });
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to register", error });
    });
});

router.post("/api/login",credentials.authInfo,(req, res) => {
    authModel.findUserAuthByUserName(req.body.userName)
        .then(user => {
            if (user && bcrypt.compareSync(req.body.password, user.password)) {
                req.session.username = user.userName;
                console.log(req.session)
                res.status(200).json({message:`Hi! ${user.userName}`});
            } else {
                res.status(401).json({message:"You cannot pass"})
            }
    
        }).catch((error) => {
      res.status(500).json({message:"Failed to login"}, error)
  })
});

router.get('/api/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            res.status(200).json({message:"You logged out! Bye"})
        })
    } else {
         res.status(200).json({ message: "You already logged out!" });
    }
})

module.exports = router;
