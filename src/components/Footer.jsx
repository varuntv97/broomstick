import React from "react";
import { Link } from "gatsby";
import {
  FaAmazon,
  FaInstagram,
  FaTwitter,
  FaLocationDot,
  FaRegEnvelope,
  FaPhone,
} from "react-icons/fa6";
import "../styles/components/footer.scss";

export default function Footer() {
  // icon and link style
  const iconStyle = {
    marginRight: "0.5em",
  };

  const flexDisplay = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__container__logo">
            <Link to="/about">broomstick</Link>
          </div>
          <div className="footer__container__item">
            <h1>Quick Links</h1>
            <div className="footer__container__item__list">
              <Link to="/#">Scientific Cleaning</Link>
              <Link to="/#">About Us</Link>
              <Link to="/#">Contact Us</Link>
              <Link to="/#">FAQs</Link>
              <Link to="/#">Buy Now</Link>
            </div>
          </div>
          <div className="footer__container__item">
            <h1>Check Us Out</h1>
            <div className="footer__container__item__list">
              <Link to="/#" style={flexDisplay}>
                <span style={iconStyle}>
                  <FaAmazon />
                </span>
                Amazon Link
              </Link>
              <Link to="/#" style={flexDisplay}>
                <span style={iconStyle}>
                  <FaInstagram />
                </span>
                Instagram Link
              </Link>
              <Link to="/#" style={flexDisplay}>
                <span style={iconStyle}>
                  <FaTwitter />
                </span>
                Twitter Link
              </Link>
            </div>
          </div>
          <div className="footer__container__item">
            <h1>Contact Us</h1>
            <div className="footer__container__item__list">
              <Link to="/#" style={flexDisplay}>
                <span style={iconStyle}>
                  <FaLocationDot />
                </span>
                Location
              </Link>
              <a href="mailto: contact@xyz6767.com" style={flexDisplay}>
                <span style={iconStyle}>
                  <FaRegEnvelope />
                </span>
                Email
              </a>
              <a href="tel:+910000000000" style={flexDisplay}>
                <span style={iconStyle}>
                  <FaPhone />
                </span>
                Phone
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_infobar">
        <div className="footer_infobar__container">
          <p>Copyright © 2023</p>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
}
