import { Link } from "react-router-dom";
import { useState } from "react";

import SidebarSection from "./SidebarSection";
import homeIconUrl from "../assets/images/home-icon.png";
import blogPostData from "../data/blogPostData.jsx";
import projectData from "../data/projectData.jsx";

export default function Sidebar() {
  const [sidebarHidden, setSidebarHidden] = useState(true);

  return (
    <div className="top-0 left-0 flex z-50 items-start h-dvh sticky md:fixed">
      <div className="w-[6px] h-dvh bg-[url('./assets/images/vertical-divider.gif')] min-w-[6px] order-2">
        <button
          className="bg-gray-300 fixed ml-[6px] hidden md:block"
          aria-haspopup="menu"
          aria-controls="site-nav"
          aria-label="Open main menu"
          aria-expanded={!sidebarHidden}
          onClick={() => setSidebarHidden(false)}
        >
          Main Menu
        </button>
      </div>
      <nav
        className={`w-56 bg-orange-100 h-dvh overflow-y-scroll p-4 ${
          sidebarHidden ? "md:hidden" : ""
        }`}
        aria-label="site"
        id="site-nav"
      >
        <div className="flex justify-between mb-6 title-bar-controls items-start">
          <Link className="inline-block" aria-label="go to home page" to="/">
            <img src={homeIconUrl} aria-hidden="true" />
          </Link>
          <button
            aria-label="Close"
            className="w-5 h-5 bg-gray-300 bg-center hidden md:block"
            aria-controls="site-nav"
            aria-expanded={!sidebarHidden}
            onClick={() => setSidebarHidden(true)}
          ></button>
        </div>
        <SidebarSection heading="My Projects">
          <ul>
            {projectData.map((project, index) => {
              return (
                <li key={index}>
                  <Link to={project.path}>{project.name}</Link>
                </li>
              );
            })}
          </ul>
        </SidebarSection>
        <SidebarSection heading="My Blog">
          <ul>
            {blogPostData.map((blogPost, index) => {
              return (
                <li key={index}>
                  <Link to={blogPost.path}>{blogPost.name}</Link>
                </li>
              );
            })}
          </ul>
        </SidebarSection>
        <SidebarSection heading="Me">
          <ul>
            <li>
              <a href="https://github.com/nicoll-douglas" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </SidebarSection>
      </nav>
    </div>
  );
}
