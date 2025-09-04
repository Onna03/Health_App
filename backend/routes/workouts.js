import express from "express";
import Workout from "../models/Workout.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create workout
router.post("/", authMiddleware, async (req, res) => {
  const { type, duration, calories } = req.body;

  try {
    const workout = new Workout({
      user: req.user,
      type,
      duration,
      calories,
    });
    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all workouts for logged in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user }).sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update workout
router.put("/:id", authMiddleware, async (req, res) => {
  const { type, duration, calories } = req.body;

  try {
    let workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      { type, duration, calories },
      { new: true }
    );
    if (!workout) return res.status(404).json({ message: "Workout not found" });

    res.json(workout);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete workout
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({ _id: req.params.id, user: req.user });
    if (!workout) return res.status(404).json({ message: "Workout not found" });

    res.json({ message: "Workout deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
