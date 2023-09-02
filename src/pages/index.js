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
      name: "Profile",
      to: "/profile",
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

  const timelines = [
    {
      time: "2021.10",
      title: "I'm an intern at Zhihu",
      content: "I mainly use React and Ant design and Pro Component",
    },
    {
      time: "2022.06",
      title: "I graduated from Beijing Institute of Technology.",
      content: "I majored in computer science and technology.",
    },
    {
      time: "2022.07",
      title: "I joined Meituan",
      content:
        "As a front-end programmer, my main technology stack is wechat mini programs.",
    },
  ];

  return (
    <main className="w-full min-h-screen custom-bg-black px-10 py-16 lg:px-52 lg:py-32">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex items-center mb-10">
          <img className="w-20 h-20 mr-8" src="/img/logo.svg" />
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
      <div className="my-24 flex flex-col justify-center lg:flex-row">
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
      <div className="relative">
        {timelines.map(({ time, title, content, readmore }) => (
          <div key={time} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full -left-3 border border-gray-500 bg-gray-300"></div>
            <div className="mb-4 text-sm font-normal leading-none text-gray-400">
              {time}
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mb-4 text-base font-normal text-gray-400">
              {content}
            </p>
            {readmore && (
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm text-white font-medium rounded-lg bg-gray-800 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-700 border-gray-600 hover:text-white hover:bg-gray-600 hover:no-underline"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
