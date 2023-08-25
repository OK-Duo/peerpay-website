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
      <div className="flex flex-col items-start whitespace-nowrap p-1">
        <form className="w-full font-semibold">
          <input type="text" placeholder="Enter your email..." className="h-12 rounded-s-lg bg-zinc-800 px-6" />
          <button className="h-12 w-auto rounded-e-lg bg-zinc-200 px-2 text-zinc-800">Sign Up</button>
        </form>
        <div className="w-full py-1">
          {buttons.map((button) => {
            return (
              <Link key={button.text} to={button.link} target="_blank" rel="noreferrer">
                <button className="mx-0.5 h-12 w-[110px] whitespace-normal rounded-md bg-primary text-lg leading-4 text-zinc-800">
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
