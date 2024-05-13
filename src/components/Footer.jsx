export default function Footer() {
  return (
    <footer className="flex flex-col bg-[url('./bg-marble.png')]">
      <div className="h-[6px] min-h-[6px] bg-[url('./horizontal-divider.gif')]"></div>
      <div className=" grid grid-cols-4 h-full ">
        <section className="flex items-center h-full p-4 xl:hidden">
          <figure className="flex gap-1">
            <img src="./dj-screw.jpg" className="h-40 window" alt="dj screw" />
            <figcaption className="text-lg text-purple-600">
              R.I.P DJ SCREW
            </figcaption>
          </figure>
        </section>
        <section className="flex flex-col items-center justify-center text-center col-span-2 text-lg xl:col-span-4 p-6">
          <p>
            Special thanks to{" "}
            <span className="text-2xl text-red-600">Batul</span>,{" "}
            <span className="text-2xl text-orange-600">Adrian </span>&
            <span className="text-2xl text-blue-600"> the onglydooples</span>{" "}
            for support and great friendship!
          </p>
          <div className="flex items-center">
            <img
              src="./friends.gif"
              className="sm:h-20 xs:h-12"
              aria-hidden="true"
            />
            <img
              src="./heart.gif"
              className="h-16 xs:h-12"
              aria-hidden="true"
            />
          </div>
        </section>
      </div>
    </footer>
  );
}
