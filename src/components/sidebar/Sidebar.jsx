import { NavLink } from "react-router-dom";
import SidebarSection from "./SidebarSection";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const [sidebarHidden, setSidebarHidden] = useState(false);

  return (
    <div className="top-0 left-0 flex z-50 items-start h-dvh sticky md:fixed">
      <div className="w-[6px] h-dvh bg-[url('./vertical-divider.gif')] min-w-[6px] order-2">
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
          <NavLink className="inline-block" aria-label="go to home page" to="/">
            <img src="./home-icon.png" aria-hidden="true" />
          </NavLink>
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
            <li>
              <NavLink>Lorem Ipsum</NavLink>
            </li>
            <li>
              <NavLink>Dolor sit amet</NavLink>
            </li>
            <li>
              <NavLink>Consectetur adipisci</NavLink>
            </li>
            <li>
              <NavLink>Eiusmod</NavLink>
            </li>
          </ul>
        </SidebarSection>
        <SidebarSection heading="My Blog">
          <ul>
            <li>
              <NavLink>01/24 - Voluptate Velit</NavLink>
            </li>
            <li>
              <NavLink>02/24 - Cillum Dolore</NavLink>
            </li>
            <li>
              <NavLink>03/24 - Anim id Est</NavLink>
            </li>
            <li>
              <NavLink>04/24 - Excepteur Sint</NavLink>
            </li>
            <li>
              <NavLink>05/24 - Aute Iure</NavLink>
            </li>
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
              <a
                href="https://www.linkedin.com/in/nicoll-douglas-135624291/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
            <li>
              <NavLink>Info</NavLink>
            </li>
          </ul>
        </SidebarSection>
      </nav>
    </div>
  );
}
