import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/components/navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const marginLeft = {
    marginLeft: "2em",
  };

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar_container">
          <div className="navbar_logo">
            <Link to="/#">
              <h1>broomstick</h1>
            </Link>
          </div>
          {/* mobile */}
          <div
            className="hamburger"
            onClick={handleToggle}
            role="presentation"
            onKeyDown={handleToggle}
          >
            <StaticImage
              src="../images/global/hamburger_dark.png"
              alt=""
              loading="eager"
            ></StaticImage>
          </div>
          {/* desktop */}
          <div className="navbar_content">
            <Link to="/#" className="content_link">
              Scientific Cleaning
            </Link>
            <Link to="/about" className="content_link">
              About Us
            </Link>
            <Link to="/#" className="content_link">
              Contact Us
            </Link>
            {/* <Link to="/#" className="content_link">
              Buy Now
            </Link> */}
            <button
              style={marginLeft}
              className={"button_dark"}
              onClick={() => {
                navigate("/404");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* mobile nav content */}
      <div
        className={isOpen ? "mobile_navbar isOpened" : "mobile_navbar isClosed"}
      >
        <div className="navbar_container">
          <div className="navbar_header">
            <div
              onClick={handleToggle}
              onKeyDown={handleToggle}
              role="presentation"
              className="close_nav"
            >
              <StaticImage
                src="../images/global/close.png"
                alt=""
                loading="eager"
              ></StaticImage>
            </div>
          </div>
          <div className="navbar_links">
            <Link
              to="/#"
              className="content_link"
              onClick={handleToggle}
              onKeyDown={handleToggle}
              role="presentation"
            >
              Scientific Cleaning
            </Link>
            <Link
              to="/#"
              className="content_link"
              onClick={handleToggle}
              onKeyDown={handleToggle}
              role="presentation"
            >
              About Us
            </Link>
            <Link
              to="/#"
              className="content_link"
              onClick={handleToggle}
              onKeyDown={handleToggle}
              role="presentation"
            >
              Contact Us
            </Link>
            <Link
              to="/#"
              className="content_link"
              onClick={handleToggle}
              onKeyDown={handleToggle}
              role="presentation"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
