import LatestBlogPosts from "./components/LatestBlogPosts";
import Header from "../../components/Header";
import GifContainer from "./components/GifContainer";
import VibesButton from "./components/VibesButton";
import QuickLinks from "./components/QuickLinks";
import MainText from "./components/MainText";

import wordArtUrl from "../../assets/images/word-art-molten.gif";
import animeGirlUrl from "../../assets/images/anime-girl.gif";
import narutoUrl from "../../assets/images/naruto.gif";
import palmTreeUrl from "../../assets/images/palm-tree.webp";

export default function Home() {
  return (
    <>
      <Header background="bg-teal-100">
        <img src={palmTreeUrl} className="w-44 lg:hidden" aria-hidden="true" />
        <div className="flex flex-col items-center text-xl text-center">
          <p className="text-lg text-purple-700">
            Welcome to the website of...
          </p>
          <img src={wordArtUrl} className="h-16 xs:h-10" alt="Nicoll Douglas" />
          <p>
            <span className="text-3xl text-red-500">Programmer</span> &{" "}
            <span className="text-2xl text-pink-500">Web Developer</span>
          </p>
          <p className="text-blue-700">Who needs web design anyway? ;-)</p>
        </div>
        <img src={palmTreeUrl} className="w-44 lg:hidden" aria-hidden="true" />
      </Header>
      <div className="w-full bg-[url('./assets/images/sunglasses-emoji.png')] bg-[length:80px] h-[80px] bg-center"></div>
      <div className="text-center flex gap-4">
        <section
          className="flex flex-col gap-2 lg:hidden items-center"
          aria-label="cool graphics & links"
        >
          <img
            src={animeGirlUrl}
            className="h-72 min-w-32"
            alt="anime girl sticker"
          />
          <img src={narutoUrl} alt="naruto sticker" className="min-w-32" />
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
