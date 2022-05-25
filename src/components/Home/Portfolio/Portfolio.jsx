import React from 'react';
import { Link } from 'react-router-dom';
import IMG1 from '../../../assets/p1.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Ecommerce Shop Website Application',
    github: 'https://github.com/ram27-titan/MernStack-Ecommerce-Alam',
    demo: 'https://mern-ecommerce-alam.herokuapp.com/',
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="w-full md:p-5  ">
      <h5 className="text-center text-slate-400 mt-[100px] ">My Recent Work</h5>
      <h1 className="text-center text-2xl text-[#4db5ff] mt-3 ">Portfolio</h1>

      <div className=" md:w-[500px] md:ml-[15%] lg:ml-[31%] lg:w-[600px]">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="bg-[#2c2c6c] border-[1px] border-transparent  hover:bg-transparent hover:border-[#2c2c6c] duration-300 cursor-default rounded-3xl mx-5 mt-4 text-center">
              <div className="p-4">
                <img src={image} alt="ME" className="rounded-2xl" />
              </div>
              <h1 className="p-4  text-lg font-semibold">{title}</h1>
              <div className="p-4">
                <a href={github} target="_blank" className="btn hover:bg-white hover:text-[#1f1f38] duration-300 mr-5">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary  hover:bg-white hover:text-[#1f1f38] duration-300">
                  Live Demo
                </a>
                <Link to={'/detail'} className="btn btn-primary hover:bg-white m-4  hover:text-[#1f1f38] duration-300">
                  Detail
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
