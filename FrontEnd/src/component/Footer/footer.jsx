import React from "react";
import "./footer.css";
import { Comp } from "../../assets/Comp";

const footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="logo" src={Comp.logofoodie2} alt="" />
            <p>Savor every bite, share every moment.</p>
            <div className="footersocial-icon">
                <img src={Comp.facebook_icon}alt="" />
                <img src={Comp.twitter_icon}alt="" />
                <img src={Comp.linkedin_icon}alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+58-897-684-2561</li>
                <li>contactme@foodie.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright ~ 2025 Foodie.in - ALL Right Reserved.
      </p>
    </div>
  );
};

export default footer;
