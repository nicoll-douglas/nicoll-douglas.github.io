import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import "98.css";
import Base from "./layouts/Base";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import PersonalWebsite from "./pages/projects/PersonalWebsite";
import Studium from "./pages/projects/Studium";
import FirstPost from "./pages/blogs/14-05-24-first-post";
import TheReactArcContinues from "./pages/blogs/29-05-24-the-react-arc-continues";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog">
          <Route path="14-05-24-first-post" element={<FirstPost />}></Route>
          <Route
            path="29-05-24-the-react-arc-continues"
            element={<TheReactArcContinues />}
          ></Route>
        </Route>
        <Route path="/projects">
          <Route path="studium" element={<Studium />}></Route>
          <Route path="personal-website" element={<PersonalWebsite />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
