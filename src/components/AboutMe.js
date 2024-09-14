import React, { useEffect } from "react";
import courtyardNashik from "../assets/images/courtyard-nashik.jpeg";
import pohumaljeweller from "../assets/images/pohumaljeweller.jpeg";
import laTerraza from "../assets/images/laTerraza.png";
import rushabhHonda from "../assets/images/rushabhHonda.png";
import fitnessLegacy from "../assets/images/fitnessLegacy.jpeg";
import ather from "../assets/images/ather.png";
import kardaCons from "../assets/images/kardaCons.jpeg";
import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";
import avatar3 from "../assets/images/avatar-3.png";
import avatar4 from "../assets/images/avatar-4.png";
import iconApp from "../assets/images/icon-app.svg";
import iconDesign from "../assets/images/icon-design.svg";
import iconDev from "../assets/images/icon-dev.svg";
import iconPhoto from "../assets/images/icon-photo.svg";
import iconQuote from "../assets/images/icon-quote.svg";

const AboutMe = ({ loading }) => {
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

  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm A Creative Director, Content Creator, Cinematographer & Digital
          Marketer from Nashik, India.
        </p>

        <p>
          As a Creative Director, my unique selling points (USPs) are a
          testament to my limitless imagination and out-of-the-box creativity. I
          possess the ability to craft visions that not only captivate but
          resonate with audiences on a deep level—visions that truly boom. My
          approach to problem-solving is streamlined and effective, allowing me
          to find easier solutions for complex challenges. With an arsenal of
          infinite ideas tailored to any situation, I excel at creating
          compelling business content that drives engagement. I have the
          remarkable skill to view a single product from 99 different
          perspectives, ensuring a fresh and comprehensive approach to every
          project. Most importantly, I am an execution maker and action taker,
          turning innovative concepts into reality with precision and impact.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDev} alt="Web development icon" width="40" />
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
              <h4 className="h4 service-item-title">Content Creation</h4>

              <p className="service-item-text">Professional content creation</p>
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
                Can Visualize the scenarios into amazing videos.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDesign} alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Design</h4>

              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
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
                Viren punjawani, <br /> <small>Pohumal Jewellers</small>
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Working with Raj for our video content creation has been a
                  remarkable experience. His creativity, attention to detail,
                  and ability to visually showcase our jewelry collections
                  exceeded our expectations. The videos beautifully captured the
                  essence of our brand, and we received great feedback from our
                  customers. We look forward to collaborating with him again for
                  future projects.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar2}
                  alt="Devesh Karda"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Devesh Karda, <br /> <small>Karda</small>
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Collaborating with Raj for our real estate video content was
                  an excellent decision. His creativity and understanding of how
                  to showcase our properties in the best light have
                  significantly enhanced our brand presence. The videos not only
                  captured the essence of our projects but also played a key
                  role in increasing our brand awareness and reaching a wider
                  audience. His work helped us connect with potential buyers
                  more effectively, and we truly appreciate his professionalism.
                  We look forward to future collaborations.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar3}
                  alt="Parikshit shauche"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Parikshit shauche, <br />
                <small>Courtyard marriot</small>
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Partnering with Raj for our video content creation was an
                  excellent experience. His creativity and ability to highlight
                  the unique features of our hotel helped elevate our brand
                  presence. The videos not only showcased the elegance and
                  comfort of our property but also contributed significantly to
                  enhancing brand awareness. Through his work, we were able to
                  engage more effectively with our target audience. We look
                  forward to continuing our collaboration in the future.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar3}
                  alt="Habib Sayyed"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Habib Sayyed, <br />
                <small>Fitness Legacy</small>
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Collaborating with Raj has been an incredible journey,
                  especially with the biopic he created that beautifully
                  captured my life story—from a small-town boy to achieving Mr.
                  Universe and now working towards Mr. Olympia. His creativity,
                  attention to detail, and ability to tell such a personal story
                  through film have significantly elevated our brand awareness.
                  The gym’s video content, along with the biopic, has inspired
                  both our members and a broader audience. We truly value his
                  work and look forward to more collaborations in the future.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar4}
                  alt="Bhavesh jain"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Bhavesh jain, <br /> <small>Rushab honda</small>
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Collaborating with Raj for the cinematography and commercial
                  video shoot of our 2024 new batch lot of vehicles was a
                  fantastic experience. His creative vision and skillful
                  execution effectively showcased the features and quality of
                  our entire lineup. The videos have significantly bolstered our
                  brand presence and engaged our target audience. We are
                  grateful for his professionalism and look forward to working
                  together on future projects.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar4}
                  alt="Kishor dusane"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Kishor dusane, <br /> <small>archit group</small>
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Working with Raj on the informative video content for our
                  newly launched properties has been a highly positive
                  experience. His ability to effectively convey the key features
                  and benefits of our properties through engaging and
                  informative videos has greatly enhanced our marketing efforts.
                  The content has been instrumental in informing potential
                  buyers and boosting our brand visibility. We appreciate his
                  dedication and look forward to future collaborations.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar4}
                  alt="Jay Patwa"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Jay Patwa, <br /> <small>Ather</small>
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Working with Raj on a project for our electric scooters was a
                  fantastic experience. His innovative ideas and attention to
                  detail brought a fresh perspective to our creative content.
                  His contribution significantly enhanced our project's impact
                  and helped us showcase our brand effectively. We appreciate
                  his work and look forward to the possibility of collaborating
                  on future projects.
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
              <img src={avatar1} alt="Daniel lewis" width="80" data-modal-img />
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
                Raj was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="clients">
        <h3 className="h3 clients-title">Top Clients</h3>

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
              href="https://www.instagram.com/ather_nashik/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ather} alt="client logo" />
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

          <li className="clients-item">
            <a
              href="https://www.instagram.com/la_terraza_thecafebar/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={laTerraza} alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default AboutMe;
