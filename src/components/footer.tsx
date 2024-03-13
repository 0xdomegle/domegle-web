import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLinks, socialMedia } from "../utils";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" absolute bottom-0 bg-white flex flex-col md:flex-row justify-between items-center md:items-start w-full md:px-12 py-5 gap-3">
      <div>
        <p className="text-xs md:text-base">
          © 2024 Domegle | Brew at <span className="font-bold">BitBrewLab</span>
        </p>
        <p className="text-xs">
          contact us at <span className="font-bold">info@0xdomegle.com</span>
        </p>
      </div>
      <div className="flex flex-col md:items-end items-center gap-3">
        <div className=" flex gap-5 text-2xl">
          {socialMedia.map((icon) => (
            <a href={icon.link} className="cursor-none">
              <FontAwesomeIcon icon={icon.icon} />
            </a>
          ))}
        </div>
        <ul className="flex md:items-center gap-5">
          {footerLinks.map((link, index) => (
            <li
              className="hover:font-bold duration-300 transition-all text-xs "
              key={index}
            >
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
