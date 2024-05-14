export default function GifContainer() {
  return (
    <section
      className="flex items-center justify-center gap-6"
      aria-label="cool gifs"
    >
      <img
        src="./animated/bart-skate.gif"
        className="w-36 sm:hidden"
        alt="bart simpson skating"
      />
      <img
        src="./animated/have-a-great-day.gif"
        className="w-36"
        alt="have a great day!"
      />
      <img
        src="./animated/sculpture.webp"
        className="w-36 sm:hidden"
        alt="greek sculpture"
      />
    </section>
  );
}
