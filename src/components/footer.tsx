export default function Footer() {
  return (
    <div className=" absolute bottom-0 flex flex-col md:flex-row justify-between items-center w-full md:px-12 py-5 gap-3">
      <p className="text-xs md:text-base">
        © 2024 Domegle | Brew at BitBrewLab
      </p>
      <ul className="flex md:items-center gap-8">
        {["Terms & Condition", "Privacy Policy", "Contact Us"].map((item) => (
          <li className="hover:font-bold duration-300 transition-all text-xs md:text-base">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
