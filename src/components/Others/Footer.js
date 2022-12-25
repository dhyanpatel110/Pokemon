import React from "react";
// ** Css
import "./styles.css";
// ** Fontawesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <p className="mr-1 credits-text">Developed by</p>
        <a className="mhq" target="_blank" href="#">
          Dhyan Patel
        </a>
      </div>
      <a
        className="view-code"
        target="_blank"
        href="https://github.com/dhyanpatel110/pokemon"
      >
        View code on GitHub
        <FontAwesomeIcon className="ml-2" icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
