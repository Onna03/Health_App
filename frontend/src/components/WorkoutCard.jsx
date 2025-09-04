function WorkoutCard({ workout, onDelete }) {
    return (
      <div className="workout-card">
        <h3>{workout.type}</h3>
        <p>Duration: {workout.duration} min</p>
        <p>Calories: {workout.calories}</p>
        <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
        <button className="delete-btn" onClick={() => onDelete(workout._id)}>Completed</button>
      </div>
    );
  }
  
  export default WorkoutCard;
  