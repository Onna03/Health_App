import { useEffect, useState } from 'react';
import { getWorkouts } from '../api/workouts';

const StatsPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getWorkouts();
        const workouts = res.data;
        
        // Calculate stats from workouts data
        const totalWorkouts = workouts.length;
        const totalDuration = workouts.reduce((sum, workout) => sum + (parseInt(workout.duration) || 0), 0);
        const totalCalories = workouts.reduce((sum, workout) => sum + (parseInt(workout.calories) || 0), 0);
        
        // Find most common workout type
        const typeCounts = {};
        workouts.forEach(workout => {
          typeCounts[workout.type] = (typeCounts[workout.type] || 0) + 1;
        });
        const mostCommonType = Object.keys(typeCounts).length > 0 
          ? Object.keys(typeCounts).reduce((a, b) => typeCounts[a] > typeCounts[b] ? a : b)
          : 'None';
        
        setStats({
          totalWorkouts,
          totalDuration,
          totalCalories,
          mostCommonType,
          averageDuration: totalWorkouts > 0 ? Math.round(totalDuration / totalWorkouts) : 0,
          averageCalories: totalWorkouts > 0 ? Math.round(totalCalories / totalWorkouts) : 0
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Workout Statistics</h2>
        <p>Loading stats...</p>
      </div>
    );
  }

  if (!stats || stats.totalWorkouts === 0) {
    return (
      <div>
        <h2>Workout Statistics</h2>
        <p>No workouts found. Start adding workouts to see your statistics!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Workout Statistics</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Workouts</h3>
          <p className="stat-number">{stats.totalWorkouts}</p>
        </div>
        
        <div className="stat-card">
          <h3>Total Duration</h3>
          <p className="stat-number">{stats.totalDuration} min</p>
        </div>
        
        <div className="stat-card">
          <h3>Total Calories</h3>
          <p className="stat-number">{stats.totalCalories}</p>
        </div>
        
        <div className="stat-card">
          <h3>Average Duration</h3>
          <p className="stat-number">{stats.averageDuration} min</p>
        </div>
        
        <div className="stat-card">
          <h3>Average Calories</h3>
          <p className="stat-number">{stats.averageCalories}</p>
        </div>
        
        <div className="stat-card">
          <h3>Most Common</h3>
          <p className="stat-number">{stats.mostCommonType}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
