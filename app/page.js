import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Revalidate the home page periodically (ISR)
export const revalidate = 120; // seconds
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
    <Contact />
    <Footer />
    </>
  );
}
