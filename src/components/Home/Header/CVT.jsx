import React from 'react';
import CV from '../../../assets/CV_Ari Alamsyah.pdf';

const CVT = () => {
  return (
    <div className="mt-10">
      <a href={CV} className="btn hover:bg-white hover:text-[#1f1f38] duration-300 mr-5">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary hover:bg-white hover:text-[#1f1f38] duration-300">
        Let's Talk
      </a>
    </div>
  );
};

export default CVT;
