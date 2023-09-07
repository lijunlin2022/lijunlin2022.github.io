import React from "react";
import Layout from "@theme/Layout";

const BackTopBtn = ({ className }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <img src="/img/back-top.svg" className={className} onClick={handleClick} />
  );
};

export default function Profile() {
  return (
    <Layout>
      <main className="mx-auto my-8 overflow-hidden lg:border lg:border-solid lg:border-gray-200 lg:flex">
        <aside className="px-4 lg:w-[285px] lg:bg-gray-100 lg:dark:bg-gray-700">
          <div className="flex flex-col justify-center items-center">
            <div className="w-24 h-24 mt-6 rounded-full bg-[url('/img/logo.svg')] dark:bg-[url('/img/dark-logo.svg')] bg-contain bg-no-repeat"></div>
            <span className="text-xl font-bold m-2">李俊霖</span>
            <span className="text-sm">前端工程师</span>
            <div className="my-8 py-2 px-4 border-2 border-solid rounded-md cursor-pointer">
              下载简历
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-[url('/img/loc.svg')] dark:bg-[url('/img/dark-loc.svg')] bg-contain bg-no-repeat mr-2"></div>
                <span>贵州省六盘水市</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-[url('/img/email.svg')] dark:bg-[url('/img/dark-email.svg')] bg-contain bg-no-repeat mr-2"></div>
                <span>lijunlin2022@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl font-bold my-8">社交媒体</div>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-[url('/img/juejin.svg')] dark:bg-[url('/img/dark-juejin.svg')] bg-contain bg-no-repeat mr-2"></div>
                <span>掘金</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-[url('/img/wechat.svg')] dark:bg-[url('/img/dark-wechat.svg')] bg-contain bg-no-repeat mr-2"></div>
                <span>微信公众号</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-[url('/img/github.svg')] dark:bg-[url('/img/dark-github.svg')] bg-contain bg-no-repeat mr-2"></div>
                <span>GitHub</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl font-bold my-8">教育经历</div>
            <div>2018 - 2022 北京理工大学 本科</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl font-bold my-8">我的技能</div>
            <ul className="flex flex-col items-start">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Vue</li>
              <li>微信小程序</li>
              <li>Next.js</li>
              <li>Nest.js</li>
            </ul>
          </div>
        </aside>
        <section className="lg:w-[665px]">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-xl font-bold my-8">项目经验</div>
            <div className="mb-4 w-full">
              <div>
                <span className="text-lg font-bold mr-2">小程序</span>
              </div>
              <ul className="flex flex-col items-start justify-start">
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
              </ul>
            </div>
            <div className="mb-4 w-full">
              <div>
                <span className="text-lg font-bold mr-2">小程序</span>
              </div>
              <ul className="flex flex-col items-start justify-start">
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
              </ul>
            </div>
            <div className="mb-4 w-full">
              <div>
                <span className="text-lg font-bold mr-2">小程序</span>
              </div>
              <ul className="flex flex-col items-start justify-start">
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
              </ul>
            </div>
            <div className="mb-4 w-full">
              <div>
                <span className="text-lg font-bold mr-2">小程序</span>
              </div>
              <ul className="flex flex-col items-start justify-start">
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
              </ul>
            </div>
            <div className="mb-4 w-full">
              <div>
                <span className="text-lg font-bold mr-2">小程序</span>
              </div>
              <ul className="flex flex-col items-start justify-start">
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
                <li>------------------------------------------------------------------------------------</li>
              </ul>
            </div>
          </div>
        </section>
        <BackTopBtn className="fixed w-8 h-8 right-4 bottom-20 z-0 lg:hidden" />
      </main>
    </Layout>
  );
}
