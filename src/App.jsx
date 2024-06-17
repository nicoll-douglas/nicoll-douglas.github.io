import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import "98.css";
import Base from "./layouts/Base";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import { useEffect } from "react";
import blogPostData from "./data/blogPostData.jsx";
import projectData from "./data/projectData.jsx";

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
        {blogPostData.map((blogPost, index) => {
          return (
            <Route
              key={index}
              path={blogPost.path}
              element={blogPost.element}
            />
          );
        })}
        {projectData.map((project, index) => {
          return (
            <Route key={index} path={project.path} element={project.element} />
          );
        })}
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
