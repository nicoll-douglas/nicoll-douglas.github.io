export default function Header() {
  return (
    <header className="flex items-center justify-center window bg-transparent py-4 lg:px-4">
      <img src="./palm-tree-2.webp" className="title-deco" aria-hidden="true" />
      <h1 className="flex flex-col items-center text-xl text-center">
        <span className="text-lg text-orange-500">
          Welcome to the website of...
        </span>
        <img
          src="./word-art-molten.gif"
          className="h-16 xs:h-10"
          aria-label="Nicoll Douglas"
        />
        <span>
          <span className="text-3xl text-red-500">Programmer</span> &{" "}
          <span className="text-2xl text-pink-500">Web Developer</span>
        </span>
        <span className="text-blue-500">Who needs web design anyway? ;-)</span>
      </h1>

      <img src="./palm-tree-2.webp" className="title-deco" aria-hidden="true" />
    </header>
  );
}
