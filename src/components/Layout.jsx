import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white">
      <Navbar />

      <main className="w-full flex justify-center ">
        <Outlet />
      </main>
    </div>
  );
}
