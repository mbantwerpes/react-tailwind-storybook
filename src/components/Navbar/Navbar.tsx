import { useState } from "react";
import logo from "../../assets/logo.svg";

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  const handleLogoClick = () => {
    alert("Redirect me pls");
  };

  return (
    <div
      className={`${
        isOpen ? "bg-gray-200 opacity-95 inset-0" : ""
      } absolute right-0 left-0 top-0`}
    >
      <button type="button" className="block lg:hidden" onClick={handleClick}>
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isOpen && (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          )}
          {!isOpen && (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>
      {/* Mobile */}
      <ul className={`grid pl-5 ${isOpen ? "block" : "hidden"} list-none p-0 `}>
        <li>Benutzerliste</li>
        <li>Bauteile</li>
        <li>Ausleihaufträge</li>
      </ul>

      {/* Desktop */}
      <div className="hidden lg:grid grid-flow-col place-content-center grid-cols-5 bg-gray-200 h-12">
        <div
          className="flex place-content-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src={logo} alt="Site logo" className="w-10 h-10" />
          <h2 className="self-center ml-4 font-bold text-xl">
            ES-Bauteileverwaltung
          </h2>
        </div>
        <ul
          className={`grid grid-flow-col justify-items-end} list-none p-0 col-start-4 self-center`}
        >
          <li>Benutzerliste</li>
          <li>Bauteile</li>
          <li>Ausleihaufträge</li>
        </ul>
        <ul
          className={`grid grid-flow-col justify-items-end} list-none p-0 col-start-5 self-center`}
        >
          <li className="font-bold">Marcel</li>
          <li>Ausloggen</li>
        </ul>
      </div>
    </div>
  );
};
