import "./App.css";
import { useEffect, useRef, useState } from "react";

// Import images
import courtyardNashik from "./assets/images/courtyard-nashik.jpeg";
import pohumaljeweller from "./assets/images/pohumaljeweller.jpeg";
import laTerraza from "./assets/images/laTerraza.png";
import rushabhHonda from "./assets/images/rushabhHonda.png";
import fitnessLegacy from "./assets/images/fitnessLegacy.jpeg";
import kardaCons from "./assets/images/kardaCons.jpeg";
import logo from "./assets/images/my-avatar.png";
import avatar1 from "./assets/images/avatar-1.png";
import avatar2 from "./assets/images/avatar-2.png";
import avatar3 from "./assets/images/avatar-3.png";
import avatar4 from "./assets/images/avatar-4.png";
import blog1 from "./assets/images/blog-1.jpg";
import blog2 from "./assets/images/blog-2.jpg";
import blog3 from "./assets/images/blog-3.jpg";
import blog4 from "./assets/images/blog-4.jpg";
import blog5 from "./assets/images/blog-5.jpg";
import blog6 from "./assets/images/blog-6.jpg";
import iconApp from "./assets/images/icon-app.svg";
import iconDesign from "./assets/images/icon-design.svg";
import iconDev from "./assets/images/icon-dev.svg";
import iconPhoto from "./assets/images/icon-photo.svg";
import iconQuote from "./assets/images/icon-quote.svg";
// import logo1Color from "./assets/images/logo-1-color.png";
// import logo2Color from "./assets/images/logo-2-color.png";
// import logo3Color from "./assets/images/logo-3-color.png";
// import logo4Color from "./assets/images/logo-4-color.png";
// import logo5Color from "./assets/images/logo-5-color.png";
// import logo6Color from "./assets/images/logo-6-color.png";
// import logoIco from "./assets/images/logo.ico";
// import logoSvg from "./assets/images/logo.svg";
// import myAvatar from "./assets/images/my-avatar.png";
import project1 from "./assets/images/project-1.jpg";
import project2 from "./assets/images/project-2.png";
import project3 from "./assets/images/project-3.jpg";
import project4 from "./assets/images/project-4.png";
import project5 from "./assets/images/project-5.png";
import project6 from "./assets/images/project-6.png";
import project7 from "./assets/images/project-7.png";
import project8 from "./assets/images/project-8.jpg";
import project9 from "./assets/images/project-9.png";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Sidebar toggle functionality for mobile
  useEffect(() => {
    if (!loading) {
      const sidebar = document.querySelector("[data-sidebar]");
      const sidebarBtn = document.querySelector("[data-sidebar-btn]");

      const handleSidebarToggle = () => {
        sidebar.classList.toggle("active");
      };

      sidebarBtn?.addEventListener("click", handleSidebarToggle);

      return () => {
        sidebarBtn?.removeEventListener("click", handleSidebarToggle);
      };
    }
  }, [loading]);

  // Testimonials modal functionality
  useEffect(() => {
    if (!loading) {
      const testimonialsItem = document.querySelectorAll(
        "[data-testimonials-item]"
      );
      const modalContainer = document.querySelector("[data-modal-container]");
      const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
      const overlay = document.querySelector("[data-overlay]");

      const testimonialsModalFunc = () => {
        modalContainer?.classList.toggle("active");
        overlay?.classList.toggle("active");
      };

      testimonialsItem.forEach((item) => {
        item.addEventListener("click", function () {
          const modalImg = document.querySelector("[data-modal-img]");
          const modalTitle = document.querySelector("[data-modal-title]");
          const modalText = document.querySelector("[data-modal-text]");

          modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
          modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
          modalTitle.innerHTML = this.querySelector(
            "[data-testimonials-title]"
          ).innerHTML;
          modalText.innerHTML = this.querySelector(
            "[data-testimonials-text]"
          ).innerHTML;

          testimonialsModalFunc();
        });
      });

      modalCloseBtn?.addEventListener("click", testimonialsModalFunc);
      overlay?.addEventListener("click", testimonialsModalFunc);

      return () => {
        testimonialsItem.forEach((item) => {
          item.removeEventListener("click", testimonialsModalFunc);
        });
        modalCloseBtn?.removeEventListener("click", testimonialsModalFunc);
        overlay?.removeEventListener("click", testimonialsModalFunc);
      };
    }
  }, [loading]);

  // Custom select and filtering functionality
  useEffect(() => {
    if (!loading) {
      const select = document.querySelector("[data-select]");
      const selectItems = document.querySelectorAll("[data-select-item]");
      const selectValue = document.querySelector("[data-select-value]");
      const filterBtn = document.querySelectorAll("[data-filter-btn]");
      const filterItems = document.querySelectorAll("[data-filter-item]");

      const elementToggleFunc = function (elem) {
        elem.classList.toggle("active");
      };

      const filterFunc = (selectedValue) => {
        filterItems.forEach((item) => {
          if (selectedValue === "all") {
            item.classList.add("active");
          } else if (selectedValue === item.dataset.category) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      };

      select?.addEventListener("click", () => elementToggleFunc(select));

      selectItems?.forEach((item) => {
        item.addEventListener("click", function () {
          let selectedValue = this.innerText.toLowerCase();
          selectValue.innerText = this.innerText;
          elementToggleFunc(select);
          filterFunc(selectedValue);
        });
      });

      let lastClickedBtn = filterBtn[0];

      filterBtn?.forEach((btn) => {
        btn.addEventListener("click", function () {
          let selectedValue = this.innerText.toLowerCase();
          selectValue.innerText = this.innerText;
          filterFunc(selectedValue);
          lastClickedBtn.classList.remove("active");
          this.classList.add("active");
          lastClickedBtn = this;
        });
      });

      return () => {
        select?.removeEventListener("click", elementToggleFunc);
        selectItems?.forEach((item) =>
          item.removeEventListener("click", elementToggleFunc)
        );
        filterBtn?.forEach((btn) =>
          btn.removeEventListener("click", filterFunc)
        );
      };
    }
  }, [loading]);
  const selectRef = useRef(null);
  // Select toggle functionality
  useEffect(() => {
    if (!loading) {
      const elementToggleFunc = (elem) => {
        elem.classList.toggle("active");
      };

      const handleSelectClick = () => {
        elementToggleFunc(selectRef.current);
      };

      const handleBodyClick = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
          // If the click is outside the select element, remove the "active" class
          selectRef.current.classList.remove("active");
        }
      };

      // Add event listener to the select element
      const selectElement = selectRef.current;
      selectElement.addEventListener("click", handleSelectClick);

      // Add event listener to the body to detect clicks outside the select element
      document.body.addEventListener("click", handleBodyClick);

      // Cleanup listeners on component unmount or re-render
      return () => {
        selectElement.removeEventListener("click", handleSelectClick);
        document.body.removeEventListener("click", handleBodyClick);
      };
    }
  }, [loading]);

  // Form validation functionality
  useEffect(() => {
    if (!loading) {
      const form = document.querySelector("[data-form]");
      const formInputs = document.querySelectorAll("[data-form-input]");
      const formBtn = document.querySelector("[data-form-btn]");

      formInputs?.forEach((input) => {
        input.addEventListener("input", function () {
          if (form?.checkValidity()) {
            formBtn?.removeAttribute("disabled");
          } else {
            formBtn?.setAttribute("disabled", "");
          }
        });
      });

      return () => {
        formInputs?.forEach((input) =>
          input.removeEventListener("input", form.checkValidity)
        );
      };
    }
  }, [loading]);

  // Page navigation functionality
  useEffect(() => {
    if (!loading) {
      const navigationLinks = document.querySelectorAll("[data-nav-link]");
      const pages = document.querySelectorAll("[data-page]");

      navigationLinks?.forEach((link) => {
        link.addEventListener("click", function () {
          pages?.forEach((page) => {
            if (this.innerHTML.toLowerCase() === page.dataset.page) {
              page.classList.add("active");
              navigationLinks.forEach((nav) => nav.classList.remove("active"));
              this.classList.add("active");
              window.scrollTo(0, 0);
            } else {
              page.classList.remove("active");
            }
          });
        });
      });

      return () => {
        navigationLinks?.forEach((link) =>
          link.removeEventListener("click", null)
        );
      };
    }
  }, [loading]);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <main>
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

                <div class="icon-wrapper">
                  <ion-icon name="chevron-down"></ion-icon>
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

          <div className="main-content">
            <nav className="navbar">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <button className="navbar-link  active" data-nav-link>
                    About
                  </button>
                </li>

                {/* <li className="navbar-item">
                <button className="navbar-link" data-nav-link>
                  Resume
                </button>
              </li> */}

                <li className="navbar-item">
                  <button className="navbar-link" data-nav-link>
                    Portfolio
                  </button>
                </li>

                <li className="navbar-item">
                  <button className="navbar-link" data-nav-link>
                    Blog
                  </button>
                </li>

                <li className="navbar-item">
                  <button className="navbar-link" data-nav-link>
                    Contact
                  </button>
                </li>
              </ul>
            </nav>

            <article className="about  active" data-page="about">
              <header>
                <h2 className="h2 article-title">About me</h2>
              </header>

              <section className="about-text">
                <p>
                  I'm A Creative Director, Content Creator, Cinematographer &
                  Digital Marketer from Nashik, India.
                </p>

                <p>
                  As a Creative Director, my unique selling points (USPs) are a
                  testament to my limitless imagination and out-of-the-box
                  creativity. I possess the ability to craft visions that not
                  only captivate but resonate with audiences on a deep
                  level—visions that truly boom. My approach to problem-solving
                  is streamlined and effective, allowing me to find easier
                  solutions for complex challenges. With an arsenal of infinite
                  ideas tailored to any situation, I excel at creating
                  compelling business content that drives engagement. I have the
                  remarkable skill to view a single product from 99 different
                  perspectives, ensuring a fresh and comprehensive approach to
                  every project. Most importantly, I am an execution maker and
                  action taker, turning innovative concepts into reality with
                  precision and impact.
                </p>
              </section>

              <section className="service">
                <h3 className="h3 service-title">What i'm doing</h3>

                <ul className="service-list">
                  <li className="service-item">
                    <div className="service-icon-box">
                      <img src={iconDesign} alt="design icon" width="40" />
                    </div>

                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">Design</h4>

                      <p className="service-item-text">
                        The most modern and high-quality design made at a
                        professional level.
                      </p>
                    </div>
                  </li>

                  <li className="service-item">
                    <div className="service-icon-box">
                      <img
                        src={iconDev}
                        alt="Web development icon"
                        width="40"
                      />
                    </div>

                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">Content Writing</h4>

                      <p className="service-item-text">
                        High-quality development of Content.
                      </p>
                    </div>
                  </li>

                  <li className="service-item">
                    <div className="service-icon-box">
                      <img src={iconApp} alt="mobile app icon" width="40" />
                    </div>

                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">
                        Content Creation
                      </h4>

                      <p className="service-item-text">
                        Professional content creation
                      </p>
                    </div>
                  </li>

                  <li className="service-item">
                    <div className="service-icon-box">
                      <img src={iconPhoto} alt="camera icon" width="40" />
                    </div>

                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">
                        Videography & cinematography
                      </h4>

                      <p className="service-item-text">
                        I make high-quality photos of any category at a
                        professional level.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>

                <ul className="testimonials-list has-scrollbar">
                  <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>
                      <figure className="testimonials-avatar-box">
                        <img
                          src={avatar1}
                          alt="Daniel lewis"
                          width="60"
                          data-testimonials-avatar
                        />
                      </figure>

                      <h4
                        className="h4 testimonials-item-title"
                        data-testimonials-title
                      >
                        Daniel lewis
                      </h4>

                      <div className="testimonials-text" data-testimonials-text>
                        <p>
                          Raj was hired to create a corporate identity. We were
                          very pleased with the work done. She has a lot of
                          experience and is very concerned about the needs of
                          client. Lorem ipsum dolor sit amet, ullamcous cididt
                          consectetur adipiscing elit, seds do et eiusmod tempor
                          incididunt ut laborels dolore magnarels alia.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>
                      <figure className="testimonials-avatar-box">
                        <img
                          src={avatar2}
                          alt="Jessica miller"
                          width="60"
                          data-testimonials-avatar
                        />
                      </figure>

                      <h4
                        className="h4 testimonials-item-title"
                        data-testimonials-title
                      >
                        Jessica miller
                      </h4>

                      <div className="testimonials-text" data-testimonials-text>
                        <p>
                          Raj was hired to create a corporate identity. We were
                          very pleased with the work done. She has a lot of
                          experience and is very concerned about the needs of
                          client. Lorem ipsum dolor sit amet, ullamcous cididt
                          consectetur adipiscing elit, seds do et eiusmod tempor
                          incididunt ut laborels dolore magnarels alia.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>
                      <figure className="testimonials-avatar-box">
                        <img
                          src={avatar3}
                          alt="Emily evans"
                          width="60"
                          data-testimonials-avatar
                        />
                      </figure>

                      <h4
                        className="h4 testimonials-item-title"
                        data-testimonials-title
                      >
                        Emily evans
                      </h4>

                      <div className="testimonials-text" data-testimonials-text>
                        <p>
                          Raj was hired to create a corporate identity. We were
                          very pleased with the work done. She has a lot of
                          experience and is very concerned about the needs of
                          client. Lorem ipsum dolor sit amet, ullamcous cididt
                          consectetur adipiscing elit, seds do et eiusmod tempor
                          incididunt ut laborels dolore magnarels alia.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>
                      <figure className="testimonials-avatar-box">
                        <img
                          src={avatar4}
                          alt="Henry william"
                          width="60"
                          data-testimonials-avatar
                        />
                      </figure>

                      <h4
                        className="h4 testimonials-item-title"
                        data-testimonials-title
                      >
                        Henry william
                      </h4>

                      <div className="testimonials-text" data-testimonials-text>
                        <p>
                          Raj was hired to create a corporate identity. We were
                          very pleased with the work done. She has a lot of
                          experience and is very concerned about the needs of
                          client. Lorem ipsum dolor sit amet, ullamcous cididt
                          consectetur adipiscing elit, seds do et eiusmod tempor
                          incididunt ut laborels dolore magnarels alia.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>

              <div className="modal-container" data-modal-container>
                <div className="overlay" data-overlay></div>

                <section className="testimonials-modal">
                  <button className="modal-close-btn" data-modal-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                  </button>

                  <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box">
                      <img
                        src={avatar1}
                        alt="Daniel lewis"
                        width="80"
                        data-modal-img
                      />
                    </figure>

                    <img src={iconQuote} alt="quote icon" />
                  </div>

                  <div className="modal-content">
                    <h4 className="h3 modal-title" data-modal-title>
                      Daniel lewis
                    </h4>

                    <time dateTime="2021-06-14">14 June, 2021</time>

                    <div data-modal-text>
                      <p>
                        Raj was hired to create a corporate identity. We were
                        very pleased with the work done. She has a lot of
                        experience and is very concerned about the needs of
                        client. Lorem ipsum dolor sit amet, ullamcous cididt
                        consectetur adipiscing elit, seds do et eiusmod tempor
                        incididunt ut laborels dolore magnarels alia.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>

                <ul className="clients-list has-scrollbar">
                  <li className="clients-item">
                    <a
                      href="https://www.instagram.com/marriottnashik/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={courtyardNashik} alt="client logo" />
                    </a>
                  </li>

                  <li className="clients-item">
                    <a
                      href="https://www.instagram.com/pohumaljeweller?igsh=MWJxam50anExaDRlYw=="
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={pohumaljeweller} alt="client logo" />
                    </a>
                  </li>

                  <li className="clients-item">
                    <a
                      href="https://www.instagram.com/la_terraza_thecafebar/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={laTerraza} alt="client logo" />
                    </a>
                  </li>

                  <li className="clients-item">
                    <a
                      href="https://www.rushabh2w.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={rushabhHonda} alt="client logo" />
                    </a>
                  </li>

                  <li className="clients-item">
                    <a
                      href="https://www.facebook.com/fitnesslegacyunisexgym/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={fitnessLegacy} alt="client logo" />
                    </a>
                  </li>

                  <li className="clients-item">
                    <a
                      href="https://www.kardaconstruction.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={kardaCons} alt="client logo" />
                    </a>
                  </li>
                </ul>
              </section>
            </article>

            <article className="resume" data-page="resume">
              <header>
                <h2 className="h2 article-title">Resume</h2>
              </header>

              <section className="timeline">
                <div className="title-wrapper">
                  <div className="icon-box">
                    <ion-icon name="book-outline"></ion-icon>
                  </div>

                  <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">
                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">
                      University school of the arts
                    </h4>

                    <span>2007 — 2008</span>

                    <p className="timeline-text">
                      Nemo enims ipsam voluptatem, blanditiis praesentium
                      voluptum delenit atque corrupti, quos dolores et quas
                      molestias exceptur.
                    </p>
                  </li>

                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">
                      New york academy of art
                    </h4>

                    <span>2006 — 2007</span>

                    <p className="timeline-text">
                      Ratione voluptatem sequi nesciunt, facere quisquams facere
                      menda ossimus, omnis voluptas assumenda est omnis..
                    </p>
                  </li>

                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">
                      High school of art and design
                    </h4>

                    <span>2002 — 2004</span>

                    <p className="timeline-text">
                      Duis aute irure dolor in reprehenderit in voluptate, quila
                      voluptas mag odit aut fugit, sed consequuntur magni
                      dolores eos.
                    </p>
                  </li>
                </ol>
              </section>

              <section className="timeline">
                <div className="title-wrapper">
                  <div className="icon-box">
                    <ion-icon name="book-outline"></ion-icon>
                  </div>

                  <h3 className="h3">Experience</h3>
                </div>

                <ol className="timeline-list">
                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">
                      Creative director
                    </h4>

                    <span>2015 — Present</span>

                    <p className="timeline-text">
                      Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                      delenit atque corrupti, quos dolores et qvuas molestias
                      exceptur.
                    </p>
                  </li>

                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Art director</h4>

                    <span>2013 — 2015</span>

                    <p className="timeline-text">
                      Nemo enims ipsam voluptatem, blanditiis praesentium
                      voluptum delenit atque corrupti, quos dolores et quas
                      molestias exceptur.
                    </p>
                  </li>

                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Web designer</h4>

                    <span>2010 — 2013</span>

                    <p className="timeline-text">
                      Nemo enims ipsam voluptatem, blanditiis praesentium
                      voluptum delenit atque corrupti, quos dolores et quas
                      molestias exceptur.
                    </p>
                  </li>
                </ol>
              </section>

              <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>

                <ul className="skills-list content-card">
                  <li className="skills-item">
                    <div className="title-wrapper">
                      <h5 className="h5">Web design</h5>
                      <data value="80">80%</data>
                    </div>

                    <div className="skill-progress-bg">
                      <div
                        className="skill-progress-fill"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </li>

                  <li className="skills-item">
                    <div className="title-wrapper">
                      <h5 className="h5">Graphic design</h5>
                      <data value="70">70%</data>
                    </div>

                    <div className="skill-progress-bg">
                      <div
                        className="skill-progress-fill"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </li>

                  <li className="skills-item">
                    <div className="title-wrapper">
                      <h5 className="h5">Branding</h5>
                      <data value="90">90%</data>
                    </div>

                    <div className="skill-progress-bg">
                      <div
                        className="skill-progress-fill"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </li>

                  <li className="skills-item">
                    <div className="title-wrapper">
                      <h5 className="h5">WordPress</h5>
                      <data value="50">50%</data>
                    </div>

                    <div className="skill-progress-bg">
                      <div
                        className="skill-progress-fill"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </li>
                </ul>
              </section>
            </article>

            <article className="portfolio" data-page="portfolio">
              <header>
                <h2 className="h2 article-title">Portfolio</h2>
              </header>

              <section className="projects">
                <ul className="filter-list">
                  <li className="filter-item">
                    <button className="active" data-filter-btn>
                      All
                    </button>
                  </li>

                  <li className="filter-item">
                    <button data-filter-btn>Web design</button>
                  </li>

                  <li className="filter-item">
                    <button data-filter-btn>Applications</button>
                  </li>

                  <li className="filter-item">
                    <button data-filter-btn>Web development</button>
                  </li>
                </ul>

                <div className="filter-select-box">
                  <button className="filter-select" ref={selectRef} data-select>
                    <div className="select-value" data-select-value>
                      Select category
                    </div>

                    <div className="select-icon">
                      <ion-icon name="chevron-down"></ion-icon>
                    </div>
                  </button>

                  <ul className="select-list">
                    <li className="select-item">
                      <button data-select-item>All</button>
                    </li>

                    <li className="select-item">
                      <button data-select-item>Web design</button>
                    </li>

                    <li className="select-item">
                      <button data-select-item>Applications</button>
                    </li>

                    <li className="select-item">
                      <button data-select-item>Web development</button>
                    </li>
                  </ul>
                </div>

                <ul className="project-list">
                  <li
                    className="project-item  active"
                    data-filter-item
                    data-category="web development"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <img src={project1} alt="finance" loading="lazy" />
                      </figure>

                      <h3 className="project-title">Finance</h3>

                      <p className="project-category">Web development</p>
                    </a>
                  </li>

                  <li
                    className="project-item  active"
                    data-filter-item
                    data-category="web development"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <img src={project2} alt="orizon" loading="lazy" />
                      </figure>

                      <h3 className="project-title">Orizon</h3>

                      <p className="project-category">Web development</p>
                    </a>
                  </li>

                  <li
                    className="project-item  active"
                    data-filter-item
                    data-category="web design"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <img src={project3} alt="fundo" loading="lazy" />
                      </figure>

                      <h3 className="project-title">Fundo</h3>

                      <p className="project-category">Web design</p>
                    </a>
                  </li>

                  <li
                    className="project-item  active"
                    data-filter-item
                    data-category="applications"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <img src={project4} alt="brawlhalla" loading="lazy" />
                      </figure>

                      <h3 className="project-title">Brawlhalla</h3>

                      <p className="project-category">Applications</p>
                    </a>
                  </li>

                  <li
                    className="project-item  active"
                    data-filter-item
                    data-category="web design"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <img src={project5} alt="dsm." loading="lazy" />
                      </figure>

                      <h3 className="project-title">DSM.</h3>

                      <p className="project-category">Web design</p>
                    </a>
                  </li>

                  <li
                    className="project-item  active"
                    data-filter-item
                    data-category="web design"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <img src={project6} alt="metaspark" loading="lazy" />
                      </figure>

                      <h3 className="project-title">MetaSpark</h3>

                      <p className="project-category">Web design</p>
                    </a>
                  </li>

                  <li
                    className="project-item  active"
                    data-filter-item
                    data-category="web development"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <img src={project7} alt="summary" loading="lazy" />
                      </figure>

                      <h3 className="project-title">Summary</h3>

                      <p className="project-category">Web development</p>
                    </a>
                  </li>

                  <li
                    className="project-item  active"
                    data-filter-item
                    data-category="applications"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <img src={project8} alt="task manager" loading="lazy" />
                      </figure>

                      <h3 className="project-title">Task Manager</h3>

                      <p className="project-category">Applications</p>
                    </a>
                  </li>

                  <li
                    className="project-item  active"
                    data-filter-item
                    data-category="web development"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <img src={project9} alt="arrival" loading="lazy" />
                      </figure>

                      <h3 className="project-title">Arrival</h3>

                      <p className="project-category">Web development</p>
                    </a>
                  </li>
                </ul>
              </section>
            </article>

            <article className="blog" data-page="blog">
              <header>
                <h2 className="h2 article-title">Blog</h2>
              </header>

              <section className="blog-posts">
                <ul className="blog-posts-list">
                  <li className="blog-post-item">
                    <a href="#">
                      <figure className="blog-banner-box">
                        <img
                          src={blog1}
                          alt="Design conferences in 2022"
                          loading="lazy"
                        />
                      </figure>

                      <div className="blog-content">
                        <div className="blog-meta">
                          <p className="blog-category">Design</p>

                          <span className="dot"></span>

                          <time dateTime="2022-02-23">Fab 23, 2022</time>
                        </div>

                        <h3 className="h3 blog-item-title">
                          Design conferences in 2022
                        </h3>

                        <p className="blog-text">
                          Veritatis et quasi architecto beatae vitae dicta sunt,
                          explicabo.
                        </p>
                      </div>
                    </a>
                  </li>

                  <li className="blog-post-item">
                    <a href="#">
                      <figure className="blog-banner-box">
                        <img
                          src={blog2}
                          alt="Best fonts every designer"
                          loading="lazy"
                        />
                      </figure>

                      <div className="blog-content">
                        <div className="blog-meta">
                          <p className="blog-category">Design</p>

                          <span className="dot"></span>

                          <time dateTime="2022-02-23">Fab 23, 2022</time>
                        </div>

                        <h3 className="h3 blog-item-title">
                          Best fonts every designer
                        </h3>

                        <p className="blog-text">
                          Sed ut perspiciatis, nam libero tempore, cum soluta
                          nobis est eligendi.
                        </p>
                      </div>
                    </a>
                  </li>

                  <li className="blog-post-item">
                    <a href="#">
                      <figure className="blog-banner-box">
                        <img
                          src={blog3}
                          alt="Design digest #80"
                          loading="lazy"
                        />
                      </figure>

                      <div className="blog-content">
                        <div className="blog-meta">
                          <p className="blog-category">Design</p>

                          <span className="dot"></span>

                          <time dateTime="2022-02-23">Fab 23, 2022</time>
                        </div>

                        <h3 className="h3 blog-item-title">
                          Design digest #80
                        </h3>

                        <p className="blog-text">
                          Excepteur sint occaecat cupidatat no proident, quis
                          nostrum exercitationem ullam corporis suscipit.
                        </p>
                      </div>
                    </a>
                  </li>

                  <li className="blog-post-item">
                    <a href="#">
                      <figure className="blog-banner-box">
                        <img
                          src={blog4}
                          alt="UI interactions of the week"
                          loading="lazy"
                        />
                      </figure>

                      <div className="blog-content">
                        <div className="blog-meta">
                          <p className="blog-category">Design</p>

                          <span className="dot"></span>

                          <time dateTime="2022-02-23">Fab 23, 2022</time>
                        </div>

                        <h3 className="h3 blog-item-title">
                          UI interactions of the week
                        </h3>

                        <p className="blog-text">
                          Enim ad minim veniam, consectetur adipiscing elit,
                          quis nostrud exercitation ullamco laboris nisi.
                        </p>
                      </div>
                    </a>
                  </li>

                  <li className="blog-post-item">
                    <a href="#">
                      <figure className="blog-banner-box">
                        <img
                          src={blog5}
                          alt="The forgotten art of spacing"
                          loading="lazy/"
                        />
                      </figure>

                      <div className="blog-content">
                        <div className="blog-meta">
                          <p className="blog-category">Design</p>

                          <span className="dot"></span>

                          <time dateTime="2022-02-23">Fab 23, 2022</time>
                        </div>

                        <h3 className="h3 blog-item-title">
                          The forgotten art of spacing
                        </h3>

                        <p className="blog-text">
                          Maxime placeat, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </p>
                      </div>
                    </a>
                  </li>

                  <li className="blog-post-item">
                    <a href="#">
                      <figure className="blog-banner-box">
                        <img
                          src={blog6}
                          alt="Design digest #79"
                          loading="lazy"
                        />
                      </figure>

                      <div className="blog-content">
                        <div className="blog-meta">
                          <p className="blog-category">Design</p>

                          <span className="dot"></span>

                          <time dateTime="2022-02-23">Fab 23, 2022</time>
                        </div>

                        <h3 className="h3 blog-item-title">
                          Design digest #79
                        </h3>

                        <p className="blog-text">
                          Optio cumque nihil impedit uo minus quod maxime
                          placeat, velit esse cillum.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </section>
            </article>

            <article className="contact" data-page="contact">
              <header>
                <h2 className="h2 article-title">Contact</h2>
              </header>

              <section className="mapbox" data-mapbox>
                <figure>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                    width="400"
                    height="300"
                    loading="lazy"
                  ></iframe>
                </figure>
              </section>

              <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>

                <form action="#" className="form" data-form>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="fullname"
                      className="form-input"
                      placeholder="Full name"
                      required
                      data-form-input
                    />

                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="Email address"
                      required
                      data-form-input
                    />
                  </div>

                  <textarea
                    name="message"
                    className="form-input"
                    placeholder="Your Message"
                    required
                    data-form-input
                  ></textarea>

                  <button
                    className="form-btn"
                    type="submit"
                    disabled
                    data-form-btn
                  >
                    <ion-icon name="paper-plane"></ion-icon>
                    <span>Send Message</span>
                  </button>
                </form>
              </section>
            </article>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
