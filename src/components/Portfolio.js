import React, { useEffect, useRef } from "react";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/project-8.jpg";
import project9 from "../assets/images/project-9.png";

const Portfolio = ({ loading }) => {
  // Common toggle functionality
  const elementToggleFunc = (elem) => {
    elem.classList.toggle("active");
  };

  // Filtering items based on selection
  const filterFunc = (selectedValue, filterItems) => {
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

  // Custom select and filtering functionality
  useEffect(() => {
    if (!loading) {
      const select = selectRef.current;
      const selectItems = document.querySelectorAll("[data-select-item]");
      const selectValue = document.querySelector("[data-select-value]");
      const filterBtn = document.querySelectorAll("[data-filter-btn]");
      const filterItems = document.querySelectorAll("[data-filter-item]");

      const handleSelectClick = () => elementToggleFunc(select);

      const handleSelectItemClick = function () {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue, filterItems);
      };

      const handleFilterBtnClick = function () {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue, filterItems);
        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      };

      // Attach event listeners
      select?.addEventListener("click", handleSelectClick);
      selectItems?.forEach((item) => {
        item.addEventListener("click", handleSelectItemClick);
      });

      let lastClickedBtn = filterBtn[0];
      filterBtn?.forEach((btn) => {
        btn.addEventListener("click", handleFilterBtnClick);
      });

      // Cleanup event listeners on component unmount
      return () => {
        select?.removeEventListener("click", handleSelectClick);
        selectItems?.forEach((item) => {
          item.removeEventListener("click", handleSelectItemClick);
        });
        filterBtn?.forEach((btn) => {
          btn.removeEventListener("click", handleFilterBtnClick);
        });
      };
    }
  }, [loading]);
  const selectRef = useRef(null);
  // Handle body click for closing the select dropdown
  useEffect(() => {
    if (!loading) {
      const handleBodyClick = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
          selectRef.current.classList.remove("active");
        }
      };

      document.body.addEventListener("click", handleBodyClick);

      return () => {
        document.body.removeEventListener("click", handleBodyClick);
      };
    }
  }, [loading]);
  return (
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
            <button data-filter-btn>Design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Content Writing</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Content Creation</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Photography and Cinematographer</button>
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
              <button data-select-item>Design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Content Creation</button>
            </li>

            <li className="select-item">
              <button data-select-item>Content Writing</button>
            </li>

            <li className="select-item">
              <button data-select-item>Photography and Cinematographer</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className="project-item  active"
            data-filter-item
            data-category="content creation"
          >
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={project1} alt="finance" loading="lazy" />
              </figure>

              <h3 className="project-title">Finance</h3>

              <p className="project-category">Content Creation</p>
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
            data-category="design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={project3} alt="fundo" loading="lazy" />
              </figure>

              <h3 className="project-title">Fundo</h3>

              <p className="project-category">Design</p>
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
  );
};

export default Portfolio;
