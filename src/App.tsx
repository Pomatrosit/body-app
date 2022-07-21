import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WeightPage from "./pages/Weight";
import CaloriesPage from "./pages/Calories";
import { firebaseApp } from "./helpers/firebase";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WeightPage />} />
        <Route path="/calories" element={<CaloriesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
