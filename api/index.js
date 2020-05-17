const express = require("express");
const app = express();

app.get("*", (req, res) => {
  console.log("hola mundo");
  res.send({ mensaje: " chancho feliz  aaa" });
});

module.exports = app;
