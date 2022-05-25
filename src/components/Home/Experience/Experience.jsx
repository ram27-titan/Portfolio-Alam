import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <div id="experience" className="w-full h-screen">
      <h5 className="text-center text-slate-400 mt-[100px] ">What Skills I Have</h5>
      <h1 className="text-center text-2xl text-[#4db5ff] mt-3 ">My Experience</h1>
      <div className="lg:grid lg:grid-cols-2 lg:mt-5 lg:px-2 lg:gap-8 lg:m-20 ">
        <div className="mt-10 bg-[#2c2c6c] border-[1px] border-transparent hover:bg-transparent hover:border-[#2c2c6c] duration-300 cursor-default rounded-3xl mx-4 p-4 md:mx-20 lg:mx-0 lg:p-10  ">
          <div className="p-5">
            <h1 className="text-center text-xl text-[#4db5ff]  ">Fontend Development</h1>
            <div className="grid grid-cols-2 gap-8 mt-10 lg:pl-[80px] ">
              <article className="flex flex-row  ">
                <BsPatchCheckFill className=" mt-1 text-[#4db5ff]" />
                <div className="ml-4">
                  <h1>HTML</h1>
                  <h5 className="text-slate-400 text-[13px]">Intermediate</h5>
                </div>
              </article>
              <article className="flex flex-row  ">
                <BsPatchCheckFill className=" mt-1 text-[#4db5ff]" />
                <div className="ml-4">
                  <h1>React JS</h1>
                  <h5 className="text-slate-400 text-[13px]">Intermediate</h5>
                </div>
              </article>
              <article className="flex flex-row  ">
                <BsPatchCheckFill className=" mt-1 text-[#4db5ff]" />
                <div className="ml-4">
                  <h1>CSS</h1>
                  <h5 className="text-slate-400 text-[13px]">Intermediate</h5>
                </div>
              </article>
              <article className="flex flex-row  ">
                <BsPatchCheckFill className=" mt-1 text-[#4db5ff]" />
                <div className="ml-4">
                  <h1>Bootstrap</h1>
                  <h5 className="text-slate-400 text-[13px]">Basic</h5>
                </div>
              </article>
              <article className="flex flex-row  ">
                <BsPatchCheckFill className=" mt-1 text-[#4db5ff]" />
                <div className="ml-4">
                  <h1>Javascript</h1>
                  <h5 className="text-slate-400 text-[13px]">Intermediate</h5>
                </div>
              </article>
              <article className="flex flex-row  ">
                <BsPatchCheckFill className=" mt-1 text-[#4db5ff]" />
                <div className="ml-4">
                  <h1>TailwindCSS</h1>
                  <h5 className="text-slate-400 text-[13px]">Intermediate</h5>
                </div>
              </article>
            </div>
          </div>
        </div>
        {/* BACKEND */}
        <div className="mt-5 md:mt-10 bg-[#2c2c6c] border-[1px] border-transparent hover:bg-transparent hover:border-[#2c2c6c] duration-300 cursor-default rounded-3xl mx-4 p-4 md:mx-20 lg:mx-0 lg:p-10 ">
          <div className="p-5">
            <h1 className="text-center text-xl text-[#4db5ff]  ">Backend Development</h1>
            <div className="grid grid-cols-2 gap-8 mt-10 lg:pl-[80px] ">
              <article className="flex flex-row  ">
                <BsPatchCheckFill className=" mt-1 text-[#4db5ff]" />
                <div className="ml-4">
                  <h1>Node JS</h1>
                  <h5 className="text-slate-400 text-[13px]">Intermediate</h5>
                </div>
              </article>
              <article className="flex flex-row  ">
                <BsPatchCheckFill className=" mt-1 text-[#4db5ff]" />
                <div className="ml-4">
                  <h1>MySQL</h1>
                  <h5 className="text-slate-400 text-[13px]">Basic</h5>
                </div>
              </article>
              <article className="flex flex-row  ">
                <BsPatchCheckFill className=" mt-1 text-[#4db5ff]" />
                <div className="ml-4">
                  <h1>Express JS</h1>
                  <h5 className="text-slate-400 text-[13px]">Intermediate</h5>
                </div>
              </article>

              <article className="flex flex-row  ">
                <BsPatchCheckFill className=" mt-1 text-[#4db5ff]" />
                <div className="ml-4">
                  <h1>MongoDB</h1>
                  <h5 className="text-slate-400 text-[13px]">Intermediate</h5>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
