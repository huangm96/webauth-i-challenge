const express = require("express");
const helmet = require("helmet");
const sessions = require('express-session')


const server = express();
const authRouter = require('./auth/auth-router.js')

const sessionConfiguration = {
    name: "jeep",
    secret:" keep it secret, keep it safe!",
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 5,
        secure:false,
    },
    resave: false,
    saveUninitialized: true,
    
}

server.use(sessions(sessionConfiguration))
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "WELCOME!!!" });
});

server.use('/', authRouter)
const port = process.env.PORT || 5555;

server.listen(port, () => {
    console.log(`\nThe server is listening on ${port}`)
})