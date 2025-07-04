import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch("https://formsubmit.co/ajax/preetrajput2020@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _captcha: "false",
          _template: "table",
          _subject: "New Contact Form Submission"
        })
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Fill the form and I’ll get back to you via email. 👋
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-div">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact__form-input"
              placeholder="NAME"
              required
            />
          </div>

          <div className="contact__form-div">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact__form-input"
              placeholder="Write Your Email"
              required
            />
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="contact__form-input"
              placeholder="Insert your subject"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className="contact__form-input"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>

          {isSent && (
            <p style={{ marginTop: "1rem", color: "green" }}>
              ✅ Message sent successfully. Thank you!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
