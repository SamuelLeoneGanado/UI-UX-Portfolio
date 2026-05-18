import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import MemoryGame from "./pages/MemoryGame";
import ECommerce from "./pages/E-Commerce";
import Analytics from "./pages/Analytics";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Portfolio />} />
      <Route path="/project1" element={<Service />} />
      <Route path="/project2" element={<MemoryGame />} />
      <Route path="/project3" element={<ECommerce />} />
      <Route path="/project4" element={<Analytics />} />
    </Routes>
  );
}

export default App;
