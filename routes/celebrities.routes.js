// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModels = require("../models/Celebrity.model");

// all your routes here
router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", (req, res) => {
  const newCelebrity = req.body;
  CelebrityModels.create(newCelebrity)
    .then((celebrities) => {
      console.log(celebrities);
      res.redirect("/celebrities");
    })

    .catch((error) => {
      console.log(error);
    });
});

router.get("/", (req, res) => {
  CelebrityModels.find()
    .then((celebrities) => {
      res.render("celebrities/celebrities", { celebrities });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
