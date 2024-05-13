import "./App.css";
import { Route, Routes } from "react-router-dom";
import Base from "./layouts/Base";
import "98.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
