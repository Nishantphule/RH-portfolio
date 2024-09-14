import "./App.css";
import { useEffect, useState } from "react";

import Preloader from "./components/Preloader";
import SideBar from "./components/SideBar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

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
          <SideBar loading={loading} />

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

                {/* <li className="navbar-item">
                  <button className="navbar-link" data-nav-link>
                    Clients
                  </button>
                </li> */}

                {/* <li className="navbar-item">
                  <button className="navbar-link" data-nav-link>
                    Blog
                  </button>
                </li> */}

                <li className="navbar-item">
                  <button className="navbar-link" data-nav-link>
                    Contact
                  </button>
                </li>
              </ul>
            </nav>

            <AboutMe loading={loading} />

            <Portfolio loading={loading} />

            <ContactMe />
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
