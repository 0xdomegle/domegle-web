export default function Footer() {
  return (
    <div className=" absolute bottom-0 bg-white flex flex-col md:flex-row justify-between items-center w-full md:px-12 py-5 gap-3">
      <p className="text-xs md:text-base">
        © 2024 Domegle | Brew at <span className="font-bold">BitBrewLab</span>
      </p>
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
    </div>
  );
}
