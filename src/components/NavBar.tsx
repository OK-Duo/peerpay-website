import React from "react";
import Icon from "../assets/svg/Icon";
import TelegramIcon from "../assets/svg/TelegramIcon";

const NavBar = () => {
  return (
    <header className="w-full z-20 top-0 flex items-center py-4 px-2 sm:px-4 bg-red-500">
        <div className="mx-auto container flex items-center justify-between">
      <div className="flex items-center justify-center">
        <Icon />
        <span className="ml-2 text-primary font-bold text-xl hidden sm:block">Peerpay</span>
      </div>
      <nav>
        <ul className="flex items-center justify-around bg-yellow-500">
          <li className="w-4 h-4"><TelegramIcon/></li>
          <li>T</li>
          <li>L</li>
        </ul>
      </nav></div>
    </header>
  );
};

export default NavBar;
