import React from "react";
import Link from "@docusaurus/Link";
import "./style.css";

export default function Home() {
  const navs = [
    {
      name: "Docs",
      to: "/docs/category/js",
    },
    {
      name: "Blog",
      to: "/blog",
    },
    {
      name: "Life",
      to: "/life/idea",
    },
    {
      name: "GitHub",
      to: "https://github.com/lijunlin2022",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-color px-10 py-16 lg:px-52 lg:py-32">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex items-center mb-10">
          <img className="w-20 h-20 mr-8" src="/img/logo.svg" />
          <div className="text-6xl font-black text-color font-tw">
            LiJunlin's Website
          </div>
        </div>
        <div className="flex">
          {navs.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              className="w-24 py-2 text-white font-bold text-xl text-center font-tw hover:no-underline"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="mt-20 max-w-2xl">
          <span className="text-4xl leading-normal font-tw font-semibold text-white">
            Hello, my name is &nbsp;
          </span>
          <span className="text-4xl leading-normal font-tw font-semibold text-yellow-200">
            Li Junlin (李俊霖),&nbsp;
          </span>
          <span className="text-4xl leading-normal font-tw font-semibold text-white">
            now working in&nbsp;
          </span>
          <span className="text-4xl leading-normal font-tw font-semibold text-rose-400">
            Meituan (美团),&nbsp;
          </span>
          <span className="text-4xl leading-normal font-tw font-semibold text-white">
            is a&nbsp;
          </span>
          <span className="text-4xl leading-normal font-tw font-semibold text-emerald-400">
            FrontEnd Programmer (前端工程师)
          </span>
        </div>
      </div>
      <div className="my-24 flex flex-col justify-center lg:flex-row">
        <div className="flex justify-center mx-3 px-10 py-6 mb-2 bg-gray-600 rounded-2xl hover:bg-gray-500">
          <Link className="text-white text-3xl text-center font-tw font-black hover:text-white">
            Get Started
          </Link>
        </div>
        <div className="flex justify-center mx-3 px-10 py-6 mb-2 bg-gray-600 rounded-2xl hover:bg-gray-500">
          <Link className="text-white text-3xl text-center font-tw font-black hover:text-white">
            Documentation
          </Link>
        </div>
      </div>
    </main>
  );
}
