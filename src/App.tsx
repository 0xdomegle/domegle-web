import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: -105, y: -105 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, []);
  return (
    <div className="overflow-y-hidden cursor-none">
      <motion.div
        variants={{
          default: { x: mousePosition.x, y: mousePosition.y },
        }}
        animate="default"
        className="bg-black h-8 w-8 rounded-full z-50  absolute hidden xl:block"
      ></motion.div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
