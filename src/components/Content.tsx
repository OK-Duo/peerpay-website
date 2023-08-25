import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const buttons = [
    {
      text: "Vote On \n cubik.so",
      link: "https://cubik.so/peerpay",
    },
    {
      text: "View Our Pitch",
      link: "https://www.youtube.com/watch?v=9QX6QX6X6qM",
    },
    {
      text: "Book A Demo",
      link: "https://calendly.com/peerpay/30min",
    },
  ];

  return (
    <section className="container flex flex-col text-center md:text-left">
      <h1 className="text-3xl font-bold text-zinc-100">
        Simplifying Crypto <br /> Transfers, Socially!
      </h1>
      <p className="my-8 text-xl">
        Send, receive, and swap cryptocurrencies and NFTs
        <br /> using your social media handles.
      </p>
      <div className="flex flex-col p-1 items-start whitespace-nowrap">
        <form className="w-full font-semibold">
          <input type="text" placeholder="Enter your email..." className="rounded-s-lg bg-zinc-800 px-6 h-12" />
          <button className="bg-zinc-200 rounded-e-lg px-2 h-12 text-zinc-800 w-auto">Sign Up</button>
        </form>
        <div className="w-full py-1">
          {buttons.map((button) => {
            return (
              <Link key={button.text} to={button.link} target="_blank" rel="noreferrer">
                <button className="bg-primary rounded-md text-zinc-800 mx-0.5 text-lg w-[110px] h-12 leading-4 whitespace-normal">
                  {button.text}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
