import { useEffect, useState } from "react";
import { getWorkouts, deleteWorkout } from "../api/workouts";
import WorkoutCard from "../components/WorkoutCard";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    try {
      const res = await getWorkouts();
      setWorkouts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteWorkout(id);
      setWorkouts(workouts.filter(w => w._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div>
      <h2>Your Workouts</h2>
      {workouts.length === 0 ? (
        <p>No workouts added yet.</p>
      ) : (
        <div className="workouts-grid">
          {workouts.map(w => (
            <WorkoutCard key={w._id} workout={w} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Workouts;
