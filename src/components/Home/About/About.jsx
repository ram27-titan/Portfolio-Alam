import React from 'react';
import ME from '../../../assets/ARI.jpg';
import { FaAward } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <div id="about" className="w-full lg:h-screen lg:mt-[100px] ">
      <h5 className="text-slate-400 text-center  ">Get To Know</h5>
      <h1 className="text-[#4db5ff] text-2xl mt-6  text-center">About Me</h1>
      <div className="lg:grid lg:grid-cols-2 lg:py-4 ">
        <div className="w-[250px] lg:w-[300px] lg:h-[385px] md: mx-auto  bg-gradient-to-tr from-[#4db5ff] via-blue-300 to-[#4db5ff] rounded-3xl   ">
          <img src={ME} alt="ME" className="w-[250px] lg:w-[300px] lg:h-[385px] md:object-cover rounded-3xl mx-auto mt-5 rotate-[10deg] hover:rotate-0 duration-300 hover:scale-105 " />
        </div>
        <div className="lg:pr-20 ">
          <div className="grid grid-cols-2 gap-4 px-4 py-4 md:grid-cols-3  ">
            <article className="bg-[#2c2c6c] text-center py-[48px] mt-5 rounded-2xl border-[1px] border-transparent hover:bg-transparent hover:border-[#2c2c6c] duration-300 cursor-default ">
              <FaAward className="mx-auto text-2xl mb-4 text-[#4db5ff]" />
              <h5>Experience</h5>
              <small className="text-slate-400 text-[11px]">Freshgraduate</small>
            </article>
            <article className="bg-[#2c2c6c] text-center py-[48px] mt-5 rounded-2xl border-[1px] border-transparent hover:bg-transparent hover:border-[#2c2c6c] duration-300 cursor-default ">
              <MdWeb className="mx-auto text-2xl mb-4 text-[#4db5ff]" />
              <h5>Training</h5>
              <small className="text-slate-400 text-[11px]">Parther by Eduwork 4 Month</small>
            </article>
            <article className="bg-[#2c2c6c] text-center py-[48px] mt-5 rounded-2xl border-[1px] border-transparent hover:bg-transparent hover:border-[#2c2c6c] duration-300 cursor-default ">
              <VscFolderLibrary className="mx-auto text-2xl mb-4 text-[#4db5ff]" />
              <h5>Project</h5>
              <small className="text-slate-400 text-[11px]">1 Project Complete</small>
            </article>
          </div>
          <p className="mt-4 text-slate-400 text-center p-3 md:text-left ml-4">
            I am a Junior Website Developer and MERN Stack technology, I really like the IT technology field, especially in the programming field, so I really enjoy learning about some of the current Developer technologies. I will continue
            to strive to become a reliable and professional developer in your company. Hello Developers 👋
          </p>
          <div className="text-center md:text-left md: ml-6">
            <a href="#contact" className="btn btn-primary hover:bg-white hover:text-[#1f1f38] duration-300 mt-4 text-center">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
