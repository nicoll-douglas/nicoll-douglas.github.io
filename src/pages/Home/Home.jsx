import Text from "./components/Text";
import LatestBlogPosts from "./components/LatestBlogPosts";
import Header from "./components/Header";
import GifContainer from "./components/GifContainer";
import VibesButton from "./components/VibesButton";
import QuickLinks from "./components/QuickLinks";
import "./Home.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-lg py-8">
      <div className="flex flex-col items-center p-4 max-w-[1050px]">
        <Header />
        <div className="  w-full max-w-[750px] bg-[url('./sunglasses-emoji.png')] bg-[length:80px] h-[80px] bg-center"></div>
        <div className="text-center flex gap-4 mb-4">
          <section
            className="flex flex-col gap-2 lg:hidden"
            aria-label="cool graphics"
          >
            <img
              src="./anime-girl.gif"
              className="h-72 min-w-32"
              alt="anime girl gif"
            />
            <img src="./naruto.gif" alt="naruto gif" />
            <VibesButton />
          </section>
          <div>
            <Text />
            <GifContainer />
          </div>
          <aside
            className="flex flex-col gap-4 min-w-40 lg:hidden"
            id="home-side-content"
          >
            <LatestBlogPosts />
            <QuickLinks />
          </aside>
        </div>
      </div>
    </div>
  );
}
