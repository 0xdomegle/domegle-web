import { motion } from "framer-motion";
import { useEffect } from "react";
import { HomeAnimation } from "../animation/homeAnimation";
import { aboutUs } from "../utils";

export default function About() {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col md:justify-center gap-8 md:gap-10 py-24 px-5 md:px-12 items-center overflow-scroll h-dvh ">
      <h1 className="text-5xl font-bold">
        <HomeAnimation text={"About Us"} />
      </h1>

      <motion.div
        variants={{
          start: { opacity: 0, y: 75 },
          end: { opacity: 1, y: 0 },
        }}
        initial="start"
        animate="end"
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex gap-5 flex-col text-justify md:3/4 xl:w-2/3 bg-white"
      >
        <p>{aboutUs}</p>
      </motion.div>
    </div>
  );
}
