export default function GifContainer() {
  return (
    <div className="flex items-center justify-center gap-6 mt-6">
      <img
        src="./bart-skate.gif"
        className="w-36 sm:hidden"
        aria-hidden="true"
      />
      <img
        src="./have-a-great-day.gif"
        className="w-36"
        aria-label="have a great day!"
      />
      <img
        src="./sculpture.webp"
        aria-hidden="true"
        className="w-36 sm:hidden"
      />
    </div>
  );
}
