import LatestBlogPosts from "./components/LatestBlogPosts";
import Header from "./components/Header";
import GifContainer from "./components/GifContainer";
import VibesButton from "./components/VibesButton/VibesButton";
import QuickLinks from "./components/QuickLinks";
import MainText from "./components/MainText";
import "./Home.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-lg h-full justify-center">
      <div className="flex flex-col items-center p-4 my-8 max-w-[1050px]">
        <Header />
        <div className="w-full bg-[url('./sunglasses-emoji.png')] bg-[length:80px] h-[80px] bg-center"></div>
        <div className="text-center flex gap-4">
          <section
            className="flex flex-col gap-2 lg:hidden"
            aria-label="cool graphics & links"
          >
            <img
              src="./anime-girl.gif"
              className="h-72 min-w-32"
              alt="anime girl gif"
            />
            <img src="./naruto.gif" alt="naruto gif" />
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
      </div>
    </div>
  );
}
