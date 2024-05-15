import bartSkateUrl from "../../../assets/images/bart-skate.gif";
import haveAGreatDayUrl from "../../../assets/images/have-a-great-day.gif";
import sculptureUrl from "../../../assets/images/sculpture.webp";

export default function GifContainer() {
  return (
    <section
      className="flex items-center justify-center gap-6"
      aria-label="cool gifs"
    >
      <img
        src={bartSkateUrl}
        className="w-36 sm:hidden"
        alt="bart simpson skating"
      />
      <img src={haveAGreatDayUrl} className="w-36" alt="have a great day!" />
      <img
        src={sculptureUrl}
        className="w-36 sm:hidden"
        alt="greek sculpture"
      />
    </section>
  );
}
