import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zonahy5', 'template_ak58bmc', form.current, 'CWgjiYk5e7PgZ3R1c').then(
      (result) => {
        alert(`Pesan terkirim`);
        console.log(result.text);
      },
      (error) => {
        alert('Coba Lagi');
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div id="contact" className="w-full md:w-[80%] md:mx-auto lg:h-screen ">
      <h5 className="text-center text-slate-400 mt-[100px] ">Get In Touch</h5>
      <h1 className="text-center text-2xl text-[#4db5ff] mt-3 ">Contact Me</h1>
      <div className="lg:grid lg:grid-cols-2">
        <div className=" lg:w-[55%] lg:ml-[180px] ">
          <article className="bg-[#2c2c6c] border-[1px] border-transparent hover:bg-transparent hover:border-[#2c2c6c] duration-300 cursor-default rounded-3xl m-5 p-5 text-center">
            <MdOutlineEmail className="mx-auto text-2xl text-[#4db5ff] " />
            <h1 className="mt-5 font-semibold">Email</h1>
            <h3 className="text-[13px] mb-4">arialamsyah049@gmail.com</h3>
            <a href="mailto:arialamsyah049@gmail.com" target="_blank" className="text-[13px] text-[#4db5ff]">
              Send a message
            </a>
          </article>
          <article className="bg-[#2c2c6c] border-[1px] border-transparent hover:bg-transparent hover:border-[#2c2c6c] duration-300 cursor-default rounded-3xl m-5 p-5 text-center">
            <FaFacebookMessenger className="mx-auto text-2xl text-[#4db5ff] " />
            <h1 className="mt-5 font-semibold">Facebook Messenger</h1>
            <h3 className="text-[13px] mb-4">Ari Alamsyah</h3>
            <a href="https://m.me/profile.php?id=100080045221030" target="_blank" className="text-[13px] text-[#4db5ff]">
              Send a message
            </a>
          </article>
          <article className="bg-[#2c2c6c] border-[1px] border-transparent hover:bg-transparent hover:border-[#2c2c6c] duration-300 cursor-default rounded-3xl m-5 p-5 text-center">
            <BsWhatsapp className="mx-auto text-2xl text-[#4db5ff] " />
            <h1 className="mt-5 font-semibold">WhatsApp</h1>
            <h3 className="text-[13px] mb-4">082273782874</h3>
            <a href="https://api.whatsapp.com/send?phone=+6282273782874" target="_blank" className="text-[13px] text-[#4db5ff]">
              Send a message
            </a>
          </article>
        </div>
        <div className=" mt-8 text-center">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 mx-4">
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary hover:bg-white hover:text-[#1f1f38] duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
