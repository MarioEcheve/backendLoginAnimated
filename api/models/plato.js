const mongoose = require("mongoose");

const Plato = mongoose.model(
  "plato",
  new mongoose.Schema({ name: String, descripcion: String })
);

Plato.create({
  name: " Palta rellena",
  descripcion: "  se vende ",
});

module.exports = Plato;
