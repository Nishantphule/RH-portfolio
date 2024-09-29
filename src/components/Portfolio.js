import React, { useEffect, useRef } from "react";

import advLogo from "../assets/images/Designs/adv.jpg";
import dishaLogo from "../assets/images/Designs/disha.jpg";
import dmoraLogo from "../assets/images/Designs/dmora.jpg";
import fabricLogo from "../assets/images/Designs/fabric.jpg";
import gogreenLogo from "../assets/images/Designs/gogreen.JPG";

import muhuratLogo from "../assets/images/Designs/muhurat.PNG";
import rhsolutionsLogo from "../assets/images/Designs/rhsolutions.jpg";
import vrmLogo from "../assets/images/Designs/vrm.jpg";
// import vrmediaLogo from "../assets/images/Designs/vrmedia.JPG";

import habib from "../assets/images/CC/habib.png";
import fabric from "../assets/images/CC/fabric.png";
import bnb from "../assets/images/CW/bnb.jpg";
import bunmaska from "../assets/images/CW/bunmaska.jpg";
import devasha from "../assets/images/CW/devasha.jpg";
import dmora from "../assets/images/CW/dmora.jpg";
import laTerreza from "../assets/images/CW/laTerreza.jpg";
import marriot_strato from "../assets/images/CW/marriot_strato.jpg";
import suvarna from "../assets/images/CW/suvarna.jpg";

import img2102 from "../assets/images/Food/IMG_2102.HEIC";
import img2107 from "../assets/images/Food/IMG_2107.HEIC";
import img2182 from "../assets/images/Food/IMG_2182.HEIC";
import img2203 from "../assets/images/Food/IMG_2203.HEIC";
import img2453 from "../assets/images/Food/IMG_2453.HEIC";
import img2456 from "../assets/images/Food/IMG_2456.HEIC";
import img2474 from "../assets/images/Food/IMG_2474.HEIC";
import img2626 from "../assets/images/Food/IMG_2626.HEIC";
import img2627 from "../assets/images/Food/IMG_2627.HEIC";
import img2772 from "../assets/images/Food/IMG_2772.HEIC";
import img2778 from "../assets/images/Food/IMG_2778.HEIC";
import img2780 from "../assets/images/Food/IMG_2780.HEIC";

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
            <button data-filter-btn>Contents & Cinematics</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Content Writing & Creation</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Food Photography</button>
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
              <button data-select-item>Contents & Cinematics</button>
            </li>

            <li className="select-item">
              <button data-select-item>Content Writing & Creation</button>
            </li>

            <li className="select-item">
              <button data-select-item>Design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Food Photography</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className="project-item  active"
            data-filter-item
            data-category="contents & cinematics"
          >
            <a
              href="https://www.instagram.com/reel/C8pJjwXBzie/?igsh=dGZnOTAyNTZkaGlm"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={habib} alt="contents & cinematics" loading="lazy" />
              </figure>

              <h3 className="project-title">A Story of Dreamer</h3>

              <p className="project-category">Contents & Cinematics</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="contents & cinematics"
          >
            <a
              href="https://www.instagram.com/reel/C-xbBsgMZlG/?igsh=MTZ3eXpweDEya2N2cQ%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={fabric} alt="contents & cinematics" loading="lazy" />
              </figure>

              <h3 className="project-title">Fabric Lab Nashik</h3>

              <p className="project-category">Contents & Cinematics</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="content writing & creation"
          >
            <a
              href="https://www.instagram.com/reel/C9jyczGMmzf/?igsh=MXZmbWdiamtvcnR6eg=="
              target="_blank"
              rel="noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={bnb}
                  alt="Content Writing & Creation"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Bulls N Bears Cafe</h3>

              <p className="project-category">Content Writing & Creation</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="content writing & creation"
          >
            <a
              href="https://www.instagram.com/reel/C-asZUKtJzJ/?igsh=M2VuYjVoY3dkcGRo"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={bunmaska}
                  alt="Content Writing & Creation"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Bun Maska Cafe</h3>

              <p className="project-category">Content Writing & Creation</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="content writing & creation"
          >
            <a
              href="https://www.instagram.com/reel/CwnfMj_LYlJ/?igsh=a2lwaTc4NWVneGV4"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={devasha}
                  alt="Content Writing & Creation"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Devasha Electronics</h3>

              <p className="project-category">Content Writing & Creation</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="content writing & creation"
          >
            <a
              href="https://www.instagram.com/reel/C5GBNKXvqZl/?igsh=OXlkenhiejRkNHNu"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={dmora}
                  alt="Content Writing & Creation"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">D'mora Cafe</h3>

              <p className="project-category">Content Writing & Creation</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="content writing & creation"
          >
            <a
              href="https://www.instagram.com/reel/C2hYKxDLfUS/?igsh=Y3J1d3o2Nm1zbXZz"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={laTerreza}
                  alt="Content Writing & Creation"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">La' Terraza </h3>

              <p className="project-category">Content Writing & Creation</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="content writing & creation"
          >
            <a
              href="https://www.instagram.com/reel/C8uG36it44Z/?igsh=a2N6eWwzc2QwaWJ3"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={marriot_strato}
                  alt="Content Writing & Creation"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Strato Marriot</h3>

              <p className="project-category">Content Writing & Creation</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="content writing & creation"
          >
            <a
              href="https://www.instagram.com/reel/CxxNsJKLObJ/?igsh=MXE0aTExZHVmbHpqcA==
"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={suvarna}
                  alt="Content Writing & Creation"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Suvarnatirth Jewellers</h3>

              <p className="project-category">Content Writing & Creation</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="design"
          >
            <a href={advLogo} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={advLogo} alt="design" loading="lazy" />
              </figure>

              <h3 className="project-title">Hair and beauty academy</h3>

              <p className="project-category">Design</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="design"
          >
            <a href={dishaLogo} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={dishaLogo} alt="design" loading="lazy" />
              </figure>

              <h3 className="project-title">Disha Kitchen Delights</h3>

              <p className="project-category">Design</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="design"
          >
            <a href={dmoraLogo} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={dmoraLogo} alt="design" loading="lazy" />
              </figure>

              <h3 className="project-title">D'mora Cafe</h3>

              <p className="project-category">Design</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="design"
          >
            <a href={fabricLogo} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={fabricLogo} alt="design" loading="lazy" />
              </figure>

              <h3 className="project-title">fabric Lab</h3>

              <p className="project-category">Design</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="design"
          >
            <a href={gogreenLogo} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={gogreenLogo} alt="design" loading="lazy" />
              </figure>

              <h3 className="project-title">go Green</h3>

              <p className="project-category">Design</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="design"
          >
            <a href={muhuratLogo} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={muhuratLogo} alt="design" loading="lazy" />
              </figure>

              <h3 className="project-title">Muhurat</h3>

              <p className="project-category">Design</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="design"
          >
            <a href={rhsolutionsLogo} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={rhsolutionsLogo} alt="design" loading="lazy" />
              </figure>

              <h3 className="project-title">R H solutions</h3>

              <p className="project-category">Design</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="design"
          >
            <a href={vrmLogo} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={vrmLogo} alt="design" loading="lazy" />
              </figure>

              <h3 className="project-title">V R Media</h3>

              <p className="project-category">Design</p>
            </a>
          </li>
          {/* <li
            className="project-item  active"
            data-filter-item
            data-category="design"
          >
            <a href={vrmediaLogo} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={vrmediaLogo} alt="design" loading="lazy" />
              </figure>

              <h3 className="project-title">V R Media</h3>

              <p className="project-category">Design</p>
            </a>
          </li> */}

          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2102} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2102} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2107} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2107} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2182} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2182} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2203} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2203} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2453} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2453} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2456} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2456} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2474} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2474} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2626} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2626} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2627} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2627} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2772} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2772} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2778} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2778} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="food photography"
          >
            <a href={img2780} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img src={img2780} alt="food photography" loading="lazy" />
              </figure>

              {/* <h3 className="project-title"></h3> */}

              <p className="project-category">Food Photography</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
