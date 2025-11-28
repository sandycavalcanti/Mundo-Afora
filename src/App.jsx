import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pacotes from "./pages/Pacotes.jsx";
import Destinos from "./pages/Destinos.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinos" element={<Destinos />} />
      <Route path="/pacotes" element={<Pacotes />} />
    </Routes>
  );
}

