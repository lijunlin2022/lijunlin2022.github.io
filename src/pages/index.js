import React from "react";
import Link from "@docusaurus/Link";
import Code from "../components/Code/index";

const code = `
function package (bagWeight, value, weight) {
  let result = [];
  for (let j = 0; j <= bagWeight; j++) {
    result[j] = j >= weight[0] ? value[0] : 0;
  }
  for (let i = 1; i < value.length; i++) {
    const next = [];
    for (let j = 0; j <= bagWeight; j++) {
      next[j] = j < weight[i] ? result[j] : Math.max(value[i] + result[j - weight[i]], result[j]);
    }
    result = next;
  }
  return result[bagWeight];
}

package(6, [5, 10, 3, 6, 3], [2, 5, 1, 4, 3]) // expect: 13
`.trim();

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

  return (
    <main className="w-full min-h-screen custom-bg-black px-10 py-16 lg:px-52 lg:pt-32 lg:pb-0">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex items-center mb-10">
          <div className="w-20 h-20 bg-[url('/img/dark-logo.svg')] bg-contain mr-4 bg-no-repeat"></div>
          <div className="text-4xl font-black custom-text-blue font-tw lg:text-6xl">
            LiJunlin's Website
          </div>
        </div>
        <div className="flex flex-wrap">
          {navs.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              className="py-2 pr-12 text-white font-bold text-xl text-left font-tw hover:no-underline"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="my-20 max-w-xl">
          {texts.map(({ content, color }) => (
            <span
              key={content}
              className={`text-3xl leading-normal font-tw font-semibold ${color} lg:text-4xl lg:leading-relaxed`}
            >
              {content}
            </span>
          ))}
        </div>
        <div className="hidden lg:block">
          <Code code={code} />
        </div>
      </div>
      <div className="flex flex-col justify-center lg:flex-row lg:my-16">
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
