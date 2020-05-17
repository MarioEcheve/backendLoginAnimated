const express = require("express");
const mongoose = requiere("mongoose");
const app = express();

mongoose.connect(process.env.MONGODB_URI);

app.get("*", (req, res) => {
  console.log("hola mundo");
  res.send({ mensaje: " chancho feliz  aaa" });
});

module.exports = app;
