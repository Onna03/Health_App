import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getWorkouts = () => API.get("/workouts");
export const addWorkout = (data) => API.post("/workouts", data);
export const deleteWorkout = (id) => API.delete(`/workouts/${id}`);

export default API;
