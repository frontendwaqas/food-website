/* eslint-disable react/prop-types */
import { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const NavBar = ({ setShowPopUp }) => {
  const basketIconPath = assets.basket_icon;
  const [menu, setMenu] = useState("home");
  return (
    <div className=" max-w-[78%]   my-6 m-auto flex items-center justify-between">
      <img
        className="w-[150px] md:max-w-[140px] cursor-pointer "
        src={assets.logo}
      />
      <ul className="flex md:gap-[20px] md:text-[17px] items-center gap-[20px] text-[#49557e] text-[18px]">
        <li
          onClick={() => setMenu("home")}
          className={`cursor-pointer  ${
            menu === "home" ? "border-b-2 border-[#49557e]  " : ""
          }`}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`cursor-pointer  ${
            menu === "menu" ? "border-b-2 border-[#49557e]  " : ""
          }`}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={`cursor-pointer  ${
            menu === "mobile-app" ? "border-b-2 border-[#49557e]  " : ""
          }`}
        >
          Mobile App
        </li>
        <li
          onClick={() => setMenu("contect us")}
          className={`cursor-pointer  ${
            menu === "contect us" ? "border-b-2 border-[#49557e]  " : ""
          }`}
        >
          Contect Us
        </li>
      </ul>
      <div className=" flex text-center items-center gap-[40px]">
        <img src={assets.search_icon} className="cursor-pointer" alt="Tomato" />
        <div className="relative">
          <Link to="/cart">
            <img
              src={basketIconPath}
              className="cursor-pointer"
              alt="Add To Card"
            />
          </Link>
          <div className="absolute min-w-[10px] min-h-[10px] bg-[tomato]  right-[-6px] top-[-6px] rounded-[50%]"></div>
        </div>{" "}
        <button
          onClick={() => {
            setShowPopUp(true);
          }}
          className="bg-transparent border-[2px] hover:bg-[#fff4f2] transition duration-[0.3s] border-orange-600 rounded-[50px] py-[10px] px-[20px]"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;
