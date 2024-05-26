import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Base() {
  return (
    <div className="flex min-h-dvh w-dvw max-w-full font-semibold">
      <Sidebar />
      <div className="flex flex-col flex-grow relative overflow-y-scoll md:ml-[6px] min-h-dvh justify-end text-lg">
        <div className="flex flex-col items-center h-full justify-start flex-grow">
          <div className="flex flex-col items-center justify-start p-4 my-8 max-w-[1050px]">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
