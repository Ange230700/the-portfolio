import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link"; // eslint-disable-line
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // eslint-disable-line
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // eslint-disable-line
// import logo from "../assets/images/logo.png";

function Header() {
  // fixed header
  const [headerActive, setHeaderActive] = useState(false); // eslint-disable-line

  // Detect scroll to toggle header class
  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const [Mobile, setMobile] = useState(false);

  return (
    <header className={`header ${headerActive ? "active" : ""}`}>
      <div className="container d_flex">
        <div className="logo">
          <img src="" alt="logo" />
          <h2>KOUAKOU Ange</h2>
        </div>
        <div className="navlink">
          <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}>
            {/* <ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'> */}
            {[
              "home",
              // "features",
              "portfolio",
              "resume",
              // "clients",
              // "blog",
              "contact",
            ].map((item) => (
              <li key={item}>
                <HashLink
                  to={`#${item}`}
                  smooth
                  onClick={() => setMobile(false)}
                >
                  {item}
                </HashLink>
              </li>
            ))}
            {/* <li>
              <button className="home-btn" type="button">
                BUY NOW
              </button>
            </li> */}
          </ul>
          <button
            type="button"
            className="toggle"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? (
              <FontAwesomeIcon icon={faTimes} className="close home-btn" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="open" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
