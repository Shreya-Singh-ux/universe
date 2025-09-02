import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HackMate from "./pages/HackMate";
import Events from "./pages/Events";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hackmate" element={<HackMate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
