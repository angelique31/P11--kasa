import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import NotFoundPage from "./pages/Error/NotFoundPage";
import Home from "./pages/Home/Home";
import LocationPage from "./components/LocationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locationPage/:id" element={<LocationPage />} />
        <Route path="/notFoundPage" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
