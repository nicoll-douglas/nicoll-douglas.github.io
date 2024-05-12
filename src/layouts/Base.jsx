import Sidebar from "../components/sidebar/Sidebar";

export default function Base() {
  return (
    <div className="flex min-h-dvh w-dvw">
      <Sidebar />
      <div className="w-[6px] h-dvh bg-[url('./vertical-divider.gif')]"></div>
      <main className="flex-grow relative px-4 bg-[url('./bg-clouds.gif')] bg-[length:270px]">
        <div></div>
      </main>
    </div>
  );
}
