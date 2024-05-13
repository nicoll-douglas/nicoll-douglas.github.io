export default function VibesButton() {
  return (
    <button
      className="p-4 bg-line"
      style={{
        background: "linear-gradient(to left, #84fffa, #ff84fc)",
      }}
    >
      <a
        href="https://open.spotify.com/playlist/73lRri4Fzu21ButMD0DtYv?si=ff99812a06bb4716&pt=85c02d3dd83caf72e01f538310bc5acc"
        target="_blank"
        className=" text-black text-nowrap"
        id="more-vibes"
      >
        Press for vibes!
      </a>
    </button>
  );
}
