import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "../utils";

export default function Footer() {
  return (
    <div className=" absolute bottom-0 bg-white flex flex-col md:flex-row justify-between items-center md:items-start w-full md:px-12 py-5 gap-3">
      <div>
        <p className="text-xs md:text-base">
          © 2024 Domegle | Brew at <span className="font-bold">BitBrewLab</span>
        </p>
      </div>
      <div className="flex flex-col md:items-end items-center gap-3">
        <ul className="flex md:items-center gap-8">
          {["Terms & Condition", "Privacy Policy", "Feedback"].map(
            (item, index) => (
              <li
                className="hover:font-bold duration-300 transition-all text-xs md:text-base"
                key={index}
              >
                {item}
              </li>
            )
          )}
        </ul>
        <div className=" flex gap-5 text-2xl">
          {socialMedia.map((icon) => (
            <a href={icon.link} className="cursor-none">
              <FontAwesomeIcon icon={icon.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
