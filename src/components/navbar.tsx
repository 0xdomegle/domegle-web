import {
  faArrowUpRightFromSquare,
  faCube,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { navLinks } from "../utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HomeAnimation } from "../animation/homeAnimation";

export default function Navbar() {
  const [isMenuClose, setIsMenuClose] = useState(true);
  return (
    <nav className="bg-white py-5 absolute w-full flex flex-col md:flex-row bg-transparent justify-start md:justify-between items-center px-12 pt-5 z-40">
      <div className="flex justify-between w-full md:w-max">
        <Link
          to={"/"}
          className="cursor-none"
          onClick={() => setIsMenuClose(true)}
        >
          <h1 className="text-2xl font-bold">Domegle</h1>
        </Link>
        <button
          className="text-xl md:hidden h-12 w-12 border-2 border-black rounded-2xl"
          onClick={() => setIsMenuClose(!isMenuClose)}
        >
          {isMenuClose ? (
            <FontAwesomeIcon
              icon={faCube}
              className=" active:rotate-45 duration-150 transition-all"
            />
          ) : (
            <FontAwesomeIcon
              icon={faXmark}
              className=" active:-rotate-45 duration-150 transition-all"
            />
          )}
        </button>
      </div>

      {/* <motion.div
        variants={{
          init: { scaleY: 0 },
          animate: {
            scaleY: 1,
            transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
          },
          exit: {
            scaleY: 0,
            transition: { duration: 0.5, ease: [0.12, 0, 0.39, 1] },
          },
        }}
        initial="init"
        animate={isMenuClose ? "init" : "animate"}
        exit="exit"
        className={`h-dvh -mt-20 md:mt-0 -z-20 md:h-max w-full md:w-max flex flex-col md:flex-row gap-12 md:gap-10 justify-center md:justify-between items-center`}
      >
        <ul className="flex flex-col md:flex-row gap-10 md:gap-8 items-center text-4xl md:text-base">
          {navLinks.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              onClick={() => setIsMenuClose(true)}
              className="cursor-none hover:font-bold transition-all duration-300"
            >
              <li>
                <HomeAnimation text={item.label} />
              </li>
            </Link>
          ))}
        </ul>

        <button className="flex items-center gap-2 border-2 border-black py-3 px-5 rounded-lg text-xs md:text-base hover:bg-black hover:text-white text-black duration-300 cursor-none">
          <p>Enter Domegle</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </button>
      </motion.div> */}

      <div
        className={`z-50 mt-5 md:mt-0 rounded-2xl ${
          isMenuClose ? "hidden" : "unset"
        } md:flex  flex-col md:flex-row gap-10 w-full md:w-max px-10 py-10 md:p-0 bg-white border-2 border-black md:border-0   md:bg-transparent items-start md:items-center text-black md:text-white`}
      >
        <ul className="flex flex-col md:flex-row md:items-center gap-8 md:text-black ">
          {navLinks.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              onClick={() => setIsMenuClose(true)}
              className="cursor-none"
            >
              <li className="hover:font-bold transition-all duration-300">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
        <Link to={"https://app.0xdomegle.com"}>
          <button className="flex gap-2 border-2 text-xs md:text-base mt-10 md:mt-0 border-black hover:bg-black hover:text-white text-black px-3 py-3 rounded-lg items-center duration-300 cursor-none hover:mix-blend-difference">
            <p>Enter Domegle</p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </Link>
      </div>
    </nav>
  );
}
