import React from "react";
import { Link } from "gatsby";
import {
  // FaAmazon,
  FaInstagram,
  FaLinkedin,
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
              <Link to="/about">About Us</Link>
              <Link to="/contactUs">Contact Us</Link>
              {/* <Link to="/#">FAQs</Link> */}
              <Link to="/pre-order">Pre-Order</Link>
            </div>
          </div>
          <div className="footer__container__item">
            <h1>Check Us Out</h1>
            <div className="footer__container__item__list">
              {/* <Link to="/#" style={flexDisplay}>
                <span style={iconStyle}>
                  <FaAmazon />
                </span>
                Amazon Link
              </Link> */}
              <Link
                target="_blank"
                to="http://broomstick.co.in/"
                style={flexDisplay}
              >
                <span style={iconStyle}>
                  <FaInstagram />
                </span>
                Broomstick
              </Link>
              <Link
                target="_blank"
                to="https://www.linkedin.com/company/broomstick-co-in/"
                style={flexDisplay}
              >
                <span style={iconStyle}>
                  <FaLinkedin />
                </span>
                Broomstick
              </Link>
            </div>
          </div>
          <div className="footer__container__item">
            <h1>Contact Us</h1>
            <div className="footer__container__item__list">
              <Link
                target="_blank"
                to="https://www.google.com/maps/place/broomstick+india/@12.2798313,76.6384806,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf65016816ea4f:0xf8cff6e6e07ca97e!8m2!3d12.2798313!4d76.6410555!16s%2Fg%2F11t6gdv_rk?entry=ttu"
                style={flexDisplay}
              >
                <span style={iconStyle}>
                  <FaLocationDot />
                </span>
                Mysuru, Karnataka.
              </Link>
              <a href="mailto:jainmehul225@gmail.com" style={flexDisplay}>
                <span style={iconStyle}>
                  <FaRegEnvelope />
                </span>
                jainmehul225@gmail.com
              </a>
              <a href="tel:+918139978999" style={flexDisplay}>
                <span style={iconStyle}>
                  <FaPhone />
                </span>
                +91 8139978999
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_infobar">
        <div className="footer_infobar__container">
          <p>Copyright © 2023</p>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
}
