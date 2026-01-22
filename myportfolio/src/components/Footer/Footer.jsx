import React from "react";
import { FaGithub,FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCoursera } from "react-icons/si";


const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Mahavir Rajprohit</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center mt-4 space-x-4 sm:space-x-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="my-1 text-sm hover:text-purple-500 sm:text-base"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center mt-6 space-x-4">
          {[
            { icon: <FaGithub />, link: "https://github.com/mrajpurohit1912" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mahavir-rajpurohit-34b79b19a" },
            { icon: <SiCoursera />, link: "https://www.coursera.org/user/ed70021891cfdc2b86887346b1bd0739" },
            { icon: <SiLeetcode />, link: "https://leetcode.com/u/mrajpurohit1912/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/mahavir._____/" },            
            { icon: <FaXTwitter />, link: "https://x.com/mrajpurohit1912" },            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-transform transform hover:text-purple-500 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="mt-6 text-sm text-gray-400">
          © 2025 Mahavir Rajpurohit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;