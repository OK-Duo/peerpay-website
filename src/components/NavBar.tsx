import React from "react";
import Icon from "../assets/svg/Icon";
import TelegramIcon from "../assets/svg/TelegramIcon";
import TwitterIcon from "../assets/svg/TwitterIcon";
import LinkedinIcon from "../assets/svg/LinkedinIcon";

const NavBar = () => {
  return (
    <header className="w-full z-20 top-0 flex items-center py-4 px-2 sm:px-4 md:px-8">
      <div className="mx-auto container flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="w-10 h-10">
            <Icon />
          </span>
          <span className="ml-2 text-primary font-bold text-xl hidden sm:block">Peerpay</span>
        </div>
        <nav>
          <ul className="flex items-center justify-around text-slate-900">
            <li className="w-8 h-8 p-1 bg-slate-300 rounded-lg mx-1">
              <TelegramIcon />
            </li>
            <li className="w-8 h-8 p-1 bg-slate-300 rounded-lg mx-1">
              <TwitterIcon />
            </li>
            <li className="w-8 h-8 p-1 bg-slate-300 rounded-lg mx-1">
              <LinkedinIcon />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
