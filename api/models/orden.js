const mongoose = require("mongoose");

const Orden = mongoose.model(
  "orden",
  new mongoose.Schema({
    plato_id: { type: Schema.Types.ObjectId, ref: "plato" },
    user_id: String,
  })
);

module.exports = Orden;
