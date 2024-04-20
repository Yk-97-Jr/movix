import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const iconMenu = [
  {
    icon: <FaFacebookF />,
    link: "https://web.facebook.com/unkut.andiinoviski1/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/jr.youcef_jr/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/youcef-khalfi/",
  },
  { icon: <FaGithub />, link: "https://github.com/Yk-97-Jr" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Passionate frontend developer skilled in HTML5, CSS, and JavaScript,
          with expertise in React JS for building scalable and interactive user
          interfaces. Proficient in Tailwind CSS, SASS for efficient styling and
          Redux Toolkit for state management in large-scale applications.
          Experienced in integrating Firebase for versatile backend
          functionalities. Adept at collaborative development using Git and
          GitHub. Dedicated to crafting visually appealing and responsive web
          experiences.
        </div>
        <div className="flex gap-x-7">
          {iconMenu.map((item, index) => (
            <Link to={item.link} key={index}>
              <span className="icon text-[1.5rem] bg-black text-white hover:text-pink p-3 rounded-full flex items-center justify-center cursor-pointer transition-all ">
                {item.icon}
              </span>
            </Link>
          ))}
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
