import { useState } from "react";
import { addWorkout } from "../api/workouts";
import WorkoutForm from "../components/WorkoutForm";
import { useNavigate } from "react-router-dom";

function AddWorkout() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (data) => {
    try {
      await addWorkout(data);
      navigate("/workouts");
    } catch (err) {
      console.error(err);
      setError("Failed to add workout");
    }
  };

  return (
    <div>
      <h2>Add New Workout</h2>
      {error && <p className="error-message">{error}</p>}
      <WorkoutForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddWorkout;
