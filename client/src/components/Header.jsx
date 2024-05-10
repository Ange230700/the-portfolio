import { useState } from "react";

function Header() {
  // fixed header
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  // toggle menu
  const [Mobile, setMobile] = useState(false);

  return (
    <header className="header">
      <div className="container d_flex">
        <div className="logo">
          <img src="" alt="" />
        </div>
        <div className="navlink">
          <ul className="nav-links-mobile">
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#features">features</a>
            </li>
            <li>
              <a href="#portfolio">portfolio</a>
            </li>
            <li>
              <a href="#resume">resume</a>
            </li>
            <li>
              <a href="#clients">clients</a>
            </li>
            <li>
              <a href="#blog">blog</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
              <button className="home-btn" type="button">
                BUY NOW
              </button>
            </li>
          </ul>
          <button
            type="button"
            className="toggle"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? (
              <i className="fas fa-times close home-btn" />
            ) : (
              <i className="fas fa-bars open" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
