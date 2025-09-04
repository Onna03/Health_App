import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import AddWorkout from "./pages/AddWorkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/add" element={<AddWorkout />} />
          <Route path="/stats" element={<StatsPage />} /> {/* new route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
