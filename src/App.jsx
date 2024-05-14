import "./App.css";
import { Route, Routes } from "react-router-dom";
import Base from "./layouts/Base";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import "98.css";

function App() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog">
          <Route path="14-05-24-first-post"></Route>
        </Route>
        <Route path="/projects">
          <Route path="studium"></Route>
          <Route path="personal-website"></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
