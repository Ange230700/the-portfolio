import { Typewriter } from "react-simple-typewriter";
import hero from "../assets/images/hero.png";
import React from "../assets/icons/react.svg";
import Node from "../assets/icons/nodejs.svg";
import Figma from "../assets/icons/figma.svg";
import Git from "../assets/icons/git.svg";
import Html from "../assets/icons/html.svg";
import Css from "../assets/icons/css.svg";
import Js from "../assets/icons/js.svg";
import Sass from "../assets/icons/sass.svg";
import MySQL from "../assets/icons/mysql.svg";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="container f_flex top">
        <div className="left top">
          <h3>WELCOME TO MY WORLD</h3>
          <h1>
            Hi, I’m <span>Jone Lee</span>
          </h1>
          <h2>
            a
            <span>
              <Typewriter
                words={[" Professional Coder.", " Developer."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p>
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>

          <div className="hero_btn d_flex">
            {/* <div className="col_1">
              <h4>FIND WITH ME</h4>
              <div className="button">
                <button
                  type="button"
                  className="btn_shadow"
                  aria-label="Facebook"
                >
                </button>
                <button
                  type="button"
                  className="btn_shadow"
                  aria-label="Instagram"
                >
                </button>
                <button
                  type="button"
                  className="btn_shadow"
                  aria-label="Another social network"
                >
                </button>
              </div>
            </div> */}
            <div className="col_1">
              <h4>BEST SKILL ON</h4>
              <div className="button">
                <button type="button" className="btn_shadow">
                  <img src={React} alt="React" />
                </button>
                <button type="button" className="btn_shadow">
                  <img src={Node} alt="Node" />
                </button>
                <button type="button" className="btn_shadow">
                  <img src={Figma} alt="Figma" />
                </button>
                <button type="button" className="btn_shadow">
                  <img src={Git} alt="Git" />
                </button>
                <button type="button" className="btn_shadow">
                  <img src={Html} alt="Html" />
                </button>
                <button type="button" className="btn_shadow">
                  <img src={Css} alt="Css" />
                </button>
                <button type="button" className="btn_shadow">
                  <img src={Js} alt="Js" />
                </button>
                <button type="button" className="btn_shadow">
                  <img src={Sass} alt="Sass" />
                </button>
                <button type="button" className="btn_shadow">
                  <img src={MySQL} alt="MySQL" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right_img">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
