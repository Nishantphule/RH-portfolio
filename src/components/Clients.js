import React from "react";
import blog1 from "./assets/images/blog-1.jpg";
import blog2 from "./assets/images/blog-2.jpg";
import blog3 from "./assets/images/blog-3.jpg";
import blog4 from "./assets/images/blog-4.jpg";
import blog5 from "./assets/images/blog-5.jpg";
import blog6 from "./assets/images/blog-6.jpg";

const Clients = () => {
  return (
    <article className="blog" data-page="clients">
      <header>
        <h2 className="h2 article-title">Clients</h2>
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
                  Sed ut perspiciatis, nam libero tempore, cum soluta nobis est
                  eligendi.
                </p>
              </div>
            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src={blog3} alt="Design digest #80" loading="lazy" />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time dateTime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">Design digest #80</h3>

                <p className="blog-text">
                  Excepteur sint occaecat cupidatat no proident, quis nostrum
                  exercitationem ullam corporis suscipit.
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
                  Enim ad minim veniam, consectetur adipiscing elit, quis
                  nostrud exercitation ullamco laboris nisi.
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
                  Maxime placeat, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src={blog6} alt="Design digest #79" loading="lazy" />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>

                  <span className="dot"></span>

                  <time dateTime="2022-02-23">Fab 23, 2022</time>
                </div>

                <h3 className="h3 blog-item-title">Design digest #79</h3>

                <p className="blog-text">
                  Optio cumque nihil impedit uo minus quod maxime placeat, velit
                  esse cillum.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Clients;
