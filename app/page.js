import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import CustomCursor from "./components/CustomCursor";

export const revalidate = 120;

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Custom cursor for desktop */}
      {/* <CustomCursor /> */}
      
      {/* Gradient orbs for background effect */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#708f96]/10 blur-3xl pointer-events-none opacity-50" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#aa895f]/10 blur-3xl pointer-events-none opacity-50" />
      
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
