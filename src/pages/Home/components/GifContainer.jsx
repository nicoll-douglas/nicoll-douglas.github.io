export default function GifContainer() {
  return (
    <section
      className="flex items-center justify-center gap-6"
      aria-label="cool gifs"
    >
      <img
        src="./bart-skate.gif"
        className="w-36 sm:hidden"
        aria-label="bart simpson skating"
      />
      <img
        src="./have-a-great-day.gif"
        className="w-36"
        aria-label="have a great day!"
      />
      <img
        src="./sculpture.webp"
        className="w-36 sm:hidden"
        aria-label="greek sculpture"
      />
    </section>
  );
}
