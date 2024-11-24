const express = require("express");
const Bug = require("../models/Bug");
const router = express.Router();

router.get("/", async (req, res) => {
    const bugs = await Bug.find();
    res.json(bugs);
});

router.post("/", async (req, res) => {
    const { title, description, priority } = req.body;

    if (!title || !priority) {
        return res.status(400).json({ message: "Title and Priority are required" });
    }

    const bug = new Bug({ title, description, priority });
    const createdBug = await bug.save();
    res.status(201).json(createdBug);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await Bug.findByIdAndDelete(id);
    res.json({ message: "Bug deleted" });
});

module.exports = router;
