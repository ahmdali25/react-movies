import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </>
  );
}
