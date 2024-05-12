import "./App.css";
import { Route, Routes } from "react-router-dom";
import Base from "./layouts/Base";
import "98.css";

function App() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/"></Route>
        <Route path="/home"></Route>
      </Route>
    </Routes>
  );
}

export default App;
