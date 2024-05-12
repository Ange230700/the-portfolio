import { useState } from "react";
import contact1 from "../assets/images/contact1.png";
import Github from "../assets/icons/github.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Twitter from "../assets/icons/twitter.svg";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const formSubmit = (event) => {
    event.preventDefault();
    setMessage(
      `My name is ${data.fullname}. 
    My phone number is ${data.phone}. 
    My email address is ${data.email}. 
    My Subject on  ${data.subject}. 
    Here is my message I want to say : ${data.message}. 
    `
    );
  };

  return (
    <section className="Contact" id="contact">
      <div>{message}</div>
      <div className="container top">
        <div className="heading text-center">
          <h4>CONTACT</h4>
          <h1>Contact With Me</h1>
        </div>

        <div className="content d_flex">
          <div className="left">
            <div className="box box_shodow">
              <div className="img">
                <img src={contact1} alt="contact" />
              </div>
              <div className="details">
                <h1>Nevine Acotanza</h1>
                <p>Chief Operating Officer</p>
                <p>
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </p>{" "}
                <br />
                <p>Phone: +01234567890</p>
                <p>Email: admin@example.com</p> <br />
                <span>FIND WITH ME</span>
                <div className="button f_flex">
                  <button type="button" className="btn_shadow">
                    <img src={Github} alt="Github" />
                  </button>
                  <button type="button" className="btn_shadow">
                    <img src={Linkedin} alt="Linkedin" />
                  </button>
                  <button type="button" className="btn_shadow">
                    <img src={Twitter} alt="Twitter" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="right box_shodow">
            <form onSubmit={formSubmit}>
              <div className="f_flex">
                <div className="input row">
                  <span>YOUR NAME</span>
                  <input
                    type="text"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input row">
                  <span>PHONE NUMBER </span>
                  <input
                    type="number"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                  />
                </div>
              </div>
              <div className="input">
                <span>EMAIL </span>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div className="input">
                <span>SUBJECT </span>
                <input
                  type="text"
                  name="subject"
                  value={data.subject}
                  onChange={InputEvent}
                />
              </div>
              <div className="input">
                <span>YOUR MESSAGE </span>
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                />
              </div>
              <button type="button" className="btn_shadow">
                SEND MESSAGE <i className="fa fa-long-arrow-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
