const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "WELCOME!!!" });
});


const port = process.env.PORT || 5555;

server.listen(port, () => {
    console.log(`\nThe server is listening on ${port}`)
})