import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/newlogo.png";
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="foter-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I'm Monu Sharma, a dedicated M.E.R.N Stack Developer from Haryana.
            With a focus on crafting innovative and user-friendly web
            applications, I leverage MongoDB, Express.js, React, and Node.js to
            bring ideas to life. Let's build something amazing together!
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder="Enter Your Email" autocomplete="off"/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2024 Monu Sharma. All Rights Reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
