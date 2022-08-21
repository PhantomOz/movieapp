// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="addmovie" element={<AddMovie />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
