import React, { useEffect } from "react";
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
    // {
    //   name: "Resume",
    //   to: "/resume",
    // },
    {
      name: "Life",
      to: "/life/orthodontic",
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
      content: "Li Junlin, ",
      color: "custom-text-yellow",
    },
    {
      content: "now working in ",
      color: "text-white",
    },
    {
      content: "Meituan, ",
      color: "custom-text-red",
    },
    {
      content: "is a ",
      color: "text-white",
    },
    {
      content: "FrontEnd Programmer.",
      color: "custom-text-green",
    },
  ];

  const texts2 = [
    {
      content: "I enjoy ",
      color: "text-white",
    },
    {
      content: "city walks",
      color: "custom-text-yellow",
    },
    {
      content: " , ",
      color: "text-white",
    },
    {
      content: "writing",
      color: "custom-text-red",
    },
    {
      content: " and the ",
      color: "text-white",
    },
    {
      content: "occasional trip",
      color: "custom-text-green",
    },
    {
      content: ". I think that ",
      color: "text-white",
    },
    {
      content: "a happy life is colorful",
      color: "custom-text-yellow",
    },
    {
      content: ".",
      color: "text-white",
    },
  ];

  const texts3 = [
    {
      content: "Of course, people can't do ",
      color: "text-white",
    },
    {
      content: "whatever they want in the world",
      color: "custom-text-red",
    },
    {
      content: " , ",
      color: "text-white",
    },
    {
      content: "so I have been looking for the art of ",
      color: "text-white",
    },
    {
      content: "compromise with life",
      color: "custom-text-green",
    },
    {
      content: " .",
      color: "text-white",
    },
  ];

  const btns = [
    {
      name: "Docs",
      to: "/docs/category/js",
    },
    {
      name: "Blog",
      to: "/blog",
    },
    {
      name: "GitHub",
      to: "https://github.com/lijunlin2022",
    },
    // {
    //   name: "Resume",
    //   to: "/resume",
    // },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.remove('-translate-x-full');
          entry.target.classList.add('opacity-1');
        }
      })
    })
    const fragments = document.getElementsByClassName('fragment');
    Array.from(fragments).forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="w-full min-h-screen custom-bg-black px-10 py-16 lg:px-52 lg:pt-32 lg:pb-0">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center">
          <div className="w-20 h-20 bg-[url('/img/dark-logo.svg')] bg-contain mr-4 bg-no-repeat"></div>
          <div className="text-4xl font-black custom-text-blue font-tw lg:text-6xl">
            李俊霖的网络日志
          </div>
        </div>
        <div className="flex justify-between mt-10 w-full lg:mt-0 lg:max-w-sm">
          {navs.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              className="text-white font-bold text-xl text-left font-tw hover:no-underline"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between items-center my-10 lg:flex-row lg:my-40 lg:justify-start">
        <div className="fragment max-w-xl opacity-0 duration-1000 ease-out -translate-x-full">
          {texts.map(({ content, color }) => (
            <span
              key={content}
              className={`text-3xl leading-normal font-tw font-semibold ${color} lg:text-4xl lg:leading-relaxed`}
            >
              {content}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center lg:flex-row">
        {btns.map(({ name, to }) => (
          <div
            key={name}
            className="flex justify-center mx-3 px-10 py-6 mb-3 bg-[#5e81ac] rounded-2xl hover:bg-[#81a1c1] cursor-pointer"
          >
            <Link
              to={to}
              className="text-white text-2xl text-center font-tw font-black hover:text-white hover:no-underline"
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between items-center my-10 lg:flex-row lg:my-40 lg:justify-end">
        <div className="fragment max-w-xl ease-out duration-1000 opacity-0">
          {texts2.map(({ content, color }) => (
            <span
              key={content}
              className={`text-3xl leading-normal font-tw font-semibold ${color} lg:text-4xl lg:leading-relaxed`}
            >
              {content}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between items-center my-10 lg:flex-row lg:my-40 lg:justify-start">
        <div className="fragment max-w-4xl opacity-0 duration-1000 ease-out -translate-x-full">
          {texts3.map(({ content, color }) => (
            <span
              key={content}
              className={`text-3xl leading-normal font-tw font-semibold ${color} lg:text-4xl lg:leading-relaxed`}
            >
              {content}
            </span>
          ))}
        </div>
      </div>
      <div className="fragment opacity-0 duration-1000 hidden bg-[#272b33] max-w-4xl my-10 lg:block lg:max-w-4xl lg:my-40">
        {/* <Code code={code} className="p-10 text-base bg-[#272b33]" /> */}
      </div>
      <div className="fragment my-10 lg:my-40">
        <ul>
          <li className="text-green-300">React Mobile Components Libaray</li>
          <li className="text-gray-300">Android</li>
          <li className="text-gray-300">Hybrid App</li>
          <li className="text-gray-300">Wechat Miniparogram</li>
        </ul>
      </div>
    </main>
  );
}
