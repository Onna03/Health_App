import express from 'express';
import Workout from '../models/Workout.js';
import requireAuth from '../middleware/authMiddleware.js';


const router = express.Router();

// GET /api/stats - get workout statistics for logged-in user
router.get('/', requireAuth, async (req, res) => {
  try {
    const userId = req.user._id;
    const workouts = await Workout.find({ user: userId });
    if (!workouts) return res.status(404).json({ error: 'No workouts found' });

    // Calculate stats
    const totalWorkouts = workouts.length;
    const typeCount = {};
    let totalDuration = 0;

    workouts.forEach(w => {
      totalDuration += w.duration || 0;
      if (w.type) typeCount[w.type] = (typeCount[w.type] || 0) + 1;
    });

    let mostCommonType = 'N/A';
    let maxCount = 0;
    for (const [type, count] of Object.entries(typeCount)) {
      if (count > maxCount) {
        mostCommonType = type;
        maxCount = count;
      }
    }

    res.status(200).json({ totalWorkouts, mostCommonType, totalDuration });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
