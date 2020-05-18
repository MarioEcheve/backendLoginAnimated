const express = require("express");
const modelPlato = require("../models/plato");
const router = express.Router();

router.get("/", (req, res) => {
  modelPlato
    .find()
    .exec()
    .then((x) => res.status(200).send(x));
});

router.get("/:id", (req, res) => {
  modelPlato
    .findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post("/", (req, res) => {
  modelPlato.create(req.body).then((x) => res.status(201).send(x));
});

router.put("/:id", (req, res) => {
  modelPlato
    .findByIdAndUpdate(req.body.id, req.body)
    .then((x) => res.status(204).send(x));
});

router.delete("/:id", (req, res) => {
  modelPlato
    .findOneAndDelete(req.params.id)
    .exec()
    .then((x) => res.sendStatus(204));
});

module.exports = router;
