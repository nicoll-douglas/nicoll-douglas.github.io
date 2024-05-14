export default function Footer() {
  return (
    <footer className="bg-[url('/backgrounds/bg-marble.png')] relative grid grid-cols-4 gap-6 pt-[30px] px-6 pb-6">
      <div className="h-[6px] min-h-[6px] bg-[url('/horizontal-divider.gif')] absolute top-0 w-full"></div>
      <figure className="flex gap-2 xl:hidden" aria-label="tribute">
        <img
          src="/images/dj-screw.jpg"
          className="h-40 window"
          alt="dj screw"
        />
        <figcaption className="text-lg text-purple-600">
          R.I.P DJ SCREW
        </figcaption>
      </figure>
      <div className="flex flex-col items-center justify-center text-center col-span-2 text-lg xl:col-span-4">
        <p>
          Special thanks to <span className="text-2xl text-red-600">Batul</span>
          , <span className="text-2xl text-orange-600">Adrian </span>&
          <span className="text-2xl text-blue-600"> the onglydooples</span> for
          support and great friendship {"<3"}
        </p>
        <div className="flex items-center">
          <img
            src="/animated/friends.gif"
            className="sm:h-20 xs:h-12"
            aria-hidden="true"
          />
          <img
            src="/animated/heart.gif"
            className="h-16 xs:h-12"
            aria-hidden="true"
          />
        </div>
      </div>
    </footer>
  );
}
