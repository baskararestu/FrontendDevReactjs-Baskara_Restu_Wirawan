import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";

function App() {
  return (
    <div className="bg-white/10">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:restaurantName" element={<RestaurantDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
