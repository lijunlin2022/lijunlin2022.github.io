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
      if (j < weight[i]) {
        next[j] = result[j];
      } else {
        next[j] = Math.max(value[i] + result[j - weight[i]], result[j]);
      }
    }
    result = next;
  }

  return result[bagWeight];
}

package(6, [5, 10, 3, 6, 3], [2, 5, 1, 4, 3]); // expect: 13
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

  return (
    <main className="w-full min-h-screen custom-bg-black px-10 py-16 lg:px-52 lg:pt-32 lg:pb-0">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center">
          <div className="w-20 h-20 bg-[url('/img/dark-logo.svg')] bg-contain mr-4 bg-no-repeat"></div>
          <div className="text-4xl font-black custom-text-blue font-tw lg:text-6xl">
            LiJunlin's Website
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
        <div className="max-w-xl">
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
        <div className="max-w-xl">
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
        <div className="max-w-4xl">
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
      <div className="hidden bg-[#272b33] lg:block lg:max-w-4xl lg:my-40">
        <Code code={code} className="p-10 text-base bg-[#272b33]" />
      </div>
    </main>
  );
}
