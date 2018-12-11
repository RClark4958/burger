var express = require("express");

var burger = require("../models/burger");

var router = express.Router();

router.get("/", (req, res) => {
  burger.getBurgerList((results) => {
      const handlebarsObject = {
          burgers: results
      }
      res.render("index", handlebarsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertBurger(req.body.name, result => {
      res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  if (!req.params.id) return res.status(400).end();
  burger.updateBurger(req.params.id, result => {
      if (result.changedRows === 0) return res.status(404).end();
      res.status(200).end();
  });
});

module.exports = router;