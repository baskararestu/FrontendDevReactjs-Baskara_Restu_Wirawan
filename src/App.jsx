import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useDispatch } from "react-redux";

function App() {
  return (
    <div className="bg-white/10">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
