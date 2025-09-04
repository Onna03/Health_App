import { useState } from "react";

function WorkoutForm({ onSubmit }) {
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, duration, calories });
    setType("");
    setDuration("");
    setCalories("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type:</label>
        <input value={type} onChange={(e) => setType(e.target.value)} required />
      </div>
      <div>
        <label>Duration (min):</label>
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      </div>
      <div>
        <label>Calories:</label>
        <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
      </div>
      <button type="submit" className="add-btn">Add Workout</button>
    </form>
  );
}

export default WorkoutForm;
