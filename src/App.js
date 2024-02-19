import "./App.css";
import about from "./components/about";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import projects from "./components/projects";
import skills from "./components/skills";

// const con={backgroundColor:'red', maxWidth:'max-content'};

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={about}></Route>
          <Route path="/skills" Component={skills}></Route>
          <Route path="/projects" Component={projects}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
