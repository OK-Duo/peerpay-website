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
    <header className="top-0 z-20 flex w-full items-center px-4 py-4 sm:px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="mr-[0.35rem] h-9 w-9">
            <Icon />
          </span>
          <h1 className="hidden text-xl font-bold text-primary sm:block">peerpay</h1>
        </div>
        <nav>
          <ul className="flex items-center justify-around">
            {socialLinks.map((link) => {
              return (
                <li key={link.name} className="mx-1 h-6 w-6 sm:mx-1.5">
                  <Link to={link.link} target="_blank" rel="noreferrer">
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
