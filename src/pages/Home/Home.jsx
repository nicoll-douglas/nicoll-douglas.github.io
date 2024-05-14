import LatestBlogPosts from "./components/LatestBlogPosts";
import Header from "../../components/Header";
import GifContainer from "./components/GifContainer";
import VibesButton from "./components/VibesButton/VibesButton";
import QuickLinks from "./components/QuickLinks";
import MainText from "./components/MainText";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <>
      <Header background="bg-teal-100">
        <img
          src="./animated/palm-tree.webp"
          className="w-44 lg:hidden"
          aria-hidden="true"
        />
        <h1 className="flex flex-col items-center text-xl text-center">
          <span className="text-lg text-purple-700">
            Welcome to the website of...
          </span>
          <img
            src="./word-art/word-art-molten.gif"
            className="h-16 xs:h-10"
            alt="Nicoll Douglas"
          />
          <span>
            <span className="text-3xl text-red-500">Programmer</span> &{" "}
            <span className="text-2xl text-pink-500">Web Developer</span>
          </span>
          <span className="text-blue-700">
            Who needs web design anyway? ;-)
          </span>
        </h1>
        <img
          src="./animated/palm-tree.webp"
          className="w-44 lg:hidden"
          aria-hidden="true"
        />
      </Header>
      <div className="w-full bg-[url('./images/sunglasses-emoji.png')] bg-[length:80px] h-[80px] bg-center"></div>
      <div className="text-center flex gap-4">
        <section
          className="flex flex-col gap-2 lg:hidden items-center"
          aria-label="cool graphics & links"
        >
          <img
            src="./animated/anime-girl.gif"
            className="h-72 min-w-32"
            alt="anime girl sticker"
          />
          <img
            src="./animated/naruto.gif"
            alt="naruto sticker"
            className="min-w-32"
          />
          <VibesButton />
        </section>
        <div className="flex flex-col gap-6">
          <MainText />
          <GifContainer />
        </div>
        <aside
          className="flex flex-col items-center gap-4 min-w-40 lg:hidden"
          id="home-side-content"
        >
          <LatestBlogPosts />
          <QuickLinks />
          <VibesButton />
        </aside>
      </div>
    </>
  );
}
