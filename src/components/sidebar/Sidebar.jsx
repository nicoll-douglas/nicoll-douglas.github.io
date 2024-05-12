import { NavLink } from "react-router-dom";
import SidebarSection from "./SidebarSection";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <nav
      className="w-56 bg-orange-100 relative h-dvh overflow-y-scroll left-0 top-0 pl-4 z-50"
      aria-label="site"
      id="site-nav"
    >
      <NavLink
        className="mt-4 mb-6 inline-block"
        aria-label="go to home page"
        to="/"
      >
        <img src="./home-icon.png" aria-hidden="true" />
      </NavLink>
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
  );
}
