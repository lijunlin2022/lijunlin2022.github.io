import React from "react";

export default function Home() {
  const timelines = [
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
    <main className="w-full min-h-screen px-10 py-16 lg:px-52 lg:py-32 custom-bg-black">
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
