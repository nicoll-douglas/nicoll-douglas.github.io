import { Link } from "react-router-dom";
import SidebarSection from "./SidebarSection";
import { useRef, useState } from "react";

export default function Sidebar() {
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const audioRef = useRef(null);

  return (
    <div className="top-0 left-0 flex z-50 items-start h-dvh sticky md:fixed">
      <div className="w-[6px] h-dvh bg-[url('/vertical-divider.gif')] min-w-[6px] order-2">
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
          <Link
            className="inline-block"
            aria-label="go to home page"
            to="/"
            onClick={() => {
              audioRef.current.volume = 0.1;
              audioRef.current.play();
            }}
          >
            <audio className="sr-only" aria-hidden="true" ref={audioRef}>
              <source src="/home-navigation.wav" type="audio/wav" />
            </audio>
            <img src="/images/home-icon.png" aria-hidden="true" />
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
            <li>
              <Link to="/projects/personal-website">Personal Website</Link>
            </li>
            <li>
              <Link to="/projects/studium">Studium</Link>
            </li>
          </ul>
        </SidebarSection>
        <SidebarSection heading="My Blog">
          <ul>
            <li>
              <Link to="/blog/14-05-24-first-post">14/05/24 - First Post</Link>
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </SidebarSection>
      </nav>
    </div>
  );
}
