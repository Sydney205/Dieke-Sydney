import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="button">
        <div className="icons">
          <FaFacebook className='icon'/>
        </div>
        <a
          href="https://web.facebook.com/people/Dieke-Sydney/100081882726090/"
          target={"_blank"}  rel={'noreferrer'}
        >
          Dieke Sydney
        </a>
      </div>
      <div className="button">
        <div className="icons">
          <FaTwitter className='icon'/>
        </div>
        <a href="https://twitter.com/DiekeSydney" target={"_blank"} rel={'noreferrer'}>
          &#64;DiekeSydney
        </a>
      </div>
      <div className="button">
        <div className="icons">
          <FaGithub className='icon'/>
        </div>
        <a href="https://github.com/Sydney205" target={"_blank"} rel={'noreferrer'}>
          Sydney205
        </a>
      </div>
    </div>
  );
};

export default Footer;
