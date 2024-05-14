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
      </Route>
    </Routes>
  );
}

export default App;
