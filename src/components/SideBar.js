import React, { useEffect } from "react";
import logo from "../assets/images/my-avatar.png";

const SideBar = ({ loading }) => {
  // Sidebar toggle functionality for mobile
  useEffect(() => {
    if (!loading) {
      const sidebar = document.querySelector("[data-sidebar]");
      const sidebarBtn = document.querySelector("[data-sidebar-btn]");
      const sidebarIcon = document.querySelector("[data-sidebar-icon]");

      const handleSidebarToggle = () => {
        sidebar.classList.toggle("active");
        sidebarIcon.classList.toggle("animate");
      };

      sidebarBtn?.addEventListener("click", handleSidebarToggle);

      return () => {
        sidebarBtn?.removeEventListener("click", handleSidebarToggle);
      };
    }
  }, [loading]);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={logo} alt="Raj Hariyani" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Raj Hariyani">
            Raj Hariyani
          </h1>

          <p className="title">Creative Director</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <div className="icon-wrapper animate" data-sidebar-icon>
            <ion-icon name="camera-sharp"></ion-icon>
          </div>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.facebook.com/RJHARIYANI007?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          {/* 
                <li className="social-item">
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li> */}

          <li className="social-item" title="Instagram">
            <a
              href="https://www.instagram.com/raaaajhariyani?igsh=ZnhmOXlpMzF2MGs4&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+919158348177" className="contact-link">
                +91 9158348177
              </a>
              <a href="tel:+919158348133" className="contact-link">
                +91 9158348133
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:rajhariyanicreations@gmail.com"
                className="contact-link"
              >
                rajhariyanicreations@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">March 15, 2001</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Nashik, Maharashtra, India</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
