const express = require("express");
const router = express.Router();
const Arena = require("../models/Arena");

router.get("/:matchId", async (req, res) => {
  try {
    const arena = await Arena.findById(req.params.matchId);
    res.json(arena);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/:matchId", async (req, res) => {
  const arena = new Arena({
    _id: req.body._id,
    arena: req.body.arena,
  });
  try {
    const savedArena = await arena.save();
    res.json(savedArena);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:matchId", async (req, res) => {
  try {
    const updatedArena = await Arena.findByIdAndUpdate(
      { _id: req.params.matchId },
      { $set: { arena: req.body.arena } },
      { new: true, useFindAndModify: false }
    );
    res.json(updatedArena);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
