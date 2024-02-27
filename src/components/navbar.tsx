import {
  faArrowUpRightFromSquare,
  faCube,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <nav className="absolute w-full flex flex-col md:flex-row bg-transparent justify-start md:justify-between items-center px-12 pt-5">
      <div className="flex justify-between w-full md:w-max">
        <h1 className="text-2xl font-bold">Domegle</h1>
        <button
          className="text-xl md:hidden h-12 w-12 border-2 rounded-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
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
      <div
        className={`z-50 mt-5 md:mt-0 rounded-2xl ${
          isMenuOpen ? "hidden" : "unset"
        } md:flex  flex-col md:flex-row gap-10 w-full md:w-max px-10 py-10 md:p-0 bg-black  md:bg-transparent items-start md:items-center text-black md:text-white`}
      >
        <ul className="flex flex-col md:flex-row md:items-center gap-8 text-black">
          {["About", "Get Token", "Paper Work"].map((item) => (
            <li className="hover:font-bold transition-all duration-300">
              {item}
            </li>
          ))}
        </ul>
        <button className="flex gap-2 border-2 text-xs md:text-base border-black hover:bg-black hover:text-white text-black px-3 py-3 rounded-lg items-center duration-300">
          <p>Enter Domegle</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </button>
      </div>
    </nav>
  );
}
