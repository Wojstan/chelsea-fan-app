const express = require('express');
const router = express.Router();
const Match = require("../models/Match");

router.get("/:matchId", async (req, res) => {
  try {
    const match = await Match.findById(req.params.matchId);
    res.json(match);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/:matchId", async (req, res) => {
  const match = new Match({
    _id: req.body._id,
    lineup: req.body.lineup
  })
  try {
    const savedMatch = await match.save()
    res.json(savedMatch);
  } catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;