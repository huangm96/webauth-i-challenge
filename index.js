const express = require("express");
const helmet = require("helmet");

const server = express();
const authRouter = require('./auth/auth-router.js')

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