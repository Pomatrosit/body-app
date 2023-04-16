import { Route, Routes } from "react-router-dom";
import Weight from "./pages/WeightPage";
import Eat from "./pages/EatPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Weight />} />
        <Route path="/eat" element={<Eat />} />
      </Route>
    </Routes>
  );
};

export default App;
