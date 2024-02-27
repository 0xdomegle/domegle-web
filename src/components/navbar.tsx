import {
  faArrowUpRightFromSquare,
  faCube,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { navLinks } from "../utils";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuClose, setIsMenuClose] = useState(true);
  return (
    <nav className="bg-white py-5 absolute w-full flex flex-col md:flex-row bg-transparent justify-start md:justify-between items-center px-12 pt-5 z-40">
      <div className="flex justify-between w-full md:w-max">
        <Link to={"/"} className="cursor-none">
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
        <button className="flex gap-2 border-2 text-xs md:text-base mt-10 md:mt-0 border-black hover:bg-black hover:text-white text-black px-3 py-3 rounded-lg items-center duration-300 cursor-none hover:mix-blend-difference">
          <p>Enter Domegle</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </button>
      </div>
    </nav>
  );
}
