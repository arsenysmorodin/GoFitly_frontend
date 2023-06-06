import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from "../pages/blog/index.jsx";
import Food from "../pages/food/index.jsx";
import Habits from "../pages/habits/index.jsx";
import Index from "../pages/index/index.jsx";
import Workouts from "../pages/workouts/index.jsx";
import ErrorPage from "../pages/error_page/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="blog" element={<Blog />} />
        <Route path="food" element={<Food />} />
        <Route path="habits" element={<Habits />} />
        <Route path="workouts" element={<Workouts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
