import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Base() {
  return (
    <div className="flex min-h-dvh w-dvw max-w-full font-semibold">
      <a href="#main" className="sr-only"></a>
      <Sidebar />
      <div className="flex flex-col flex-grow relative overflow-y-scoll md:ml-[6px] min-h-dvh">
        <main
          className="bg-[url('./bg-clouds.gif')] bg-[length:270px] flex-grow"
          id="main"
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
