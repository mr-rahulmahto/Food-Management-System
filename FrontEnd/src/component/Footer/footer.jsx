import React from "react";
import "./footer.css";
import { Comp } from "../../assets/Comp";

const Footer = () => {
  return (
    <div className="footer" id="footer">

      {/* Decorative background orb */}
      <div className="footer-orb" />

      <div className="footer-inner">
        <div className="footer-top">

          {/* ── Left: Brand ── */}
          <div className="footer-brand">

            {/* Brand icon + name */}
            <div className="footer-brand-header">
              <div className="footer-brand-icon">
                <img src={Comp.logofoodie2} alt="Foodie2" />
              </div>
              <span className="footer-brand-name">Foodie<span>2</span></span>
            </div>

            {/* Tagline */}
            <p className="footer-tagline">
              Savor every bite, share every moment. Crafted with love from our kitchen to your table.
            </p>

            {/* Socials */}
            <div className="footer-socials">
              <a href="#" className="footer-social-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="Twitter">
                <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>

          </div>

          {/* ── Center: Company Links ── */}
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* ── Right: Contact ── */}
          <div className="footer-col">
            <h3>Get in touch</h3>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              <span>+58-897-684-2561</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>contactme@foodie.com</span>
            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 <span>Foodie.in</span> — All rights reserved.</p>
          <span className="footer-badge">Made with ♥ for food lovers</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;