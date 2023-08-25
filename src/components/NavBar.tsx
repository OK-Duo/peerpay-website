import React from "react";
import Icon from "../assets/svg/Icon";
import TelegramIcon from "../assets/svg/TelegramIcon";
import TwitterIcon from "../assets/svg/TwitterIcon";
import LinkedinIcon from "../assets/svg/LinkedinIcon";
import { Link } from "react-router-dom";
import GithubIcon from "../assets/svg/GithubIcon";

const NavBar = () => {
  const socialLinks = [
    {
      name: "Telegram",
      link: "https://t.me/OrinHazan",
      icon: <TelegramIcon />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/peerpay_app",
      icon: <TwitterIcon />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/orin-hazan-b640b0271/",
      icon: <LinkedinIcon />,
    },
    {
      name: "Github",
      link: "https://github.com/PeerpayApp",
      icon: <GithubIcon />,
    },
  ];
  return (
    <header className="w-full z-20 top-0 flex items-center py-4 px-4 sm:px-6 md:px-8">
      <div className="mx-auto container flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="w-9 h-9 mr-[0.35rem]">
            <Icon />
          </span>
          <h1 className="text-primary font-bold text-xl hidden sm:block">peerpay</h1>
        </div>
        <nav>
          <ul className="flex items-center justify-around text-slate-300">
            {socialLinks.map((link) => {
              return (
                <li key={link.name} className="w-6 h-6 mx-1 sm:mx-1.5">
                  <Link to={link.link} target="_blank">
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
