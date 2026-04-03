import { MdArrowOutward, MdCopyright, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p className="contact-detail">
              <MdEmail className="contact-icon" />
              <a
                href="mailto:omjagdale09@gmail.com"
                data-cursor="disable"
              >
                omjagdale09@gmail.com
              </a>
            </p>
            <p className="contact-detail">
              <MdPhone className="contact-icon" />
              <a href="tel:+918080235415" data-cursor="disable">
                +91 8080235415
              </a>
            </p>
            <p className="contact-detail">
              <MdLocationOn className="contact-icon" />
              Pune, Maharashtra, India
            </p>
            <h4>Education</h4>
            <p>
              B.Tech AI & Data Science, AISSMS IOIT College of Engineering, Pune — 2023–2027
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Omjagdal"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/omjagdale/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Built with ❤️ <br /> by <span>Om Jagdale</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
