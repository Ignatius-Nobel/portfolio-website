import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const navlinks = [
  {
    text: "Home",
    path: "",
  },
  {
    text: "About",
    path: "about",
  },
  {
    text: "Projects",
    path: "projects",
  },
  {
    text: "Contact",
    path: "contact",
  },
];

export default function Layout() {
  return (
    <main className= "min-h-screen bg-neutral-950" style={{backgroundImage: `radial-gradient(circle at 0.25px 0.25px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: "8px 8px", backgroundRepeat: "repeat"}}>
      <Navbar navlinks={navlinks} />
      <Outlet />
      <Footer navlinks={navlinks} />
    </main>
  );
}
