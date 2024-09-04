import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "84af7f31-12f6-400d-b191-7ff8fd6f8e5c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You can
            contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" /> <p>monu136760@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Jind, Haryana</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>9053069935</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Monu Sharma" required />
          <label>Your Email</label>
          <input type="email" name="email" placeholder="@gmail.com" required />
          <label>Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message" required></textarea>
          <button type="submit" className="contact-submit">Submit Now</button>
        </form>  
      </div>
    </div>
  );
};

export default Contact;