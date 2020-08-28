var router = require("express").Router();

router.get("/", function (req, res) {
    res.render("landingpage", { title: "Home Page", user: req.user ? req.user : null });
  });

  module.exports = router;