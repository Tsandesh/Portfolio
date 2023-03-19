import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatar from "../assets/avatar.JPG";

const Hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://twitter.com/SandeshThapa69",
      icon: <FaTwitter />
    },
    {
      id: 2,
      link: "https://www.facebook.com/Roronoa.bountyhunter/",
      icon: <FaFacebook />
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/sandesh-b-thapa-779482259/",
      icon: <FaLinkedin />
    },
  ];

  window.addEventListener("scroll",function(){
    const downArrow = document.querySelector(".down-arrow");
    if(this.scrollY >=90) {downArrow.classList.add("hide-down-arrow")}
    else {downArrow.classList.remove("hide-down-arrow")}
  });

  return (
    <section className="min-h-screem flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 font-bold uppercase">
        Sandesh Thapa
      </h2>
      <h3 className="py-3 text-2x">Software Enginnering Student</h3>
      <p className="max-w-xl font-ligh text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>
        Welcome to my site. I am  An aspiring software enginnering Student from Nepal 🇳🇵🇳🇵🇳🇵 . I
        Love to work on web dev, Mobile dev & Automation Projects
      </p>
      {/* Social Icons */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
</div> 
        {/* avatar and resume */}
        <div>
          <img
            src={avatar}
            alt="avatar"
            className="w-60 h-60 md:w-72 md:h-72 object-cover object-top  rounded-xl pt-5"
          />
          <a href="/sandeshcv.pdf" download={true} className="flex items-center justify-center mt-10 bg-[#8E8EF2] text-white py-2 rounded-lg ">Resume</a>
        </div>
        <div className="down-arrow mt-10">
            <FaArrowDown className="text-gray-400 text-2xl animate-bounce"/>
        </div>
      
    </section>
  );
};

export default Hero;
