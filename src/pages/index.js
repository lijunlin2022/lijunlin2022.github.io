import React from "react";
import Link from "@docusaurus/Link";

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
      name: "Resume",
      to: "/resume",
    },
    {
      name: "GitHub",
      to: "https://github.com/lijunlin2022",
    },
  ];

  const texts = [
    {
      content: "Hello, my name is ",
      color: "text-white",
    },
    {
      content: "Li Junlin (李俊霖), ",
      color: "custom-text-yellow",
    },
    {
      content: "now working in ",
      color: "text-white",
    },
    {
      content: "Meituan (美团), ",
      color: "custom-text-red",
    },
    {
      content: "is a ",
      color: "text-white",
    },
    {
      content: "FrontEnd Programmer (前端工程师).",
      color: "custom-text-green",
    },
  ];

  const btns = [
    {
      name: "Resume",
      to: "/resume",
    },
    {
      name: "Documentation",
      to: "/docs/category/js",
    },
    {
      name: "Blog",
      to: "/blog",
    },
  ];

  return (
    <main className="w-full min-h-screen custom-bg-black px-10 py-16 lg:px-52 lg:pt-32 lg:pb-0">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex items-center mb-10">
          <div className="w-20 h-20 bg-[url('/img/dark-logo.svg')] bg-contain mr-4 bg-no-repeat"></div>
          <div className="text-4xl font-black custom-text-blue font-tw lg:text-6xl">
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
          {texts.map(({ content, color }) => (
            <span
              key={content}
              className={`text-4xl leading-normal font-tw font-semibold ${color} lg:text-4xl lg:leading-relaxed`}
            >
              {content}
            </span>
          ))}
        </div>
        <img
          src="/img/lijunlin.png"
          className="hidden max-w-2xl rounded-2xl lg:block"
        />
      </div>
      <div className="my-24 flex flex-col justify-center lg:flex-row lg:my-16">
        {btns.map(({ name, to }) => (
          <div
            key={name}
            className="flex justify-center mx-3 px-10 py-6 mb-3 bg-gray-600 rounded-2xl hover:bg-gray-500 cursor-pointer"
          >
            <Link
              to={to}
              className="text-white text-3xl text-center font-tw font-black hover:text-white hover:no-underline"
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
