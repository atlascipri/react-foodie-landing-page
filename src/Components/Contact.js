import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1> Have Question In Mind? </h1>
      <h1> Let Us Help You </h1>
      <div className="contact-form-container">
        <input type="email" placeholder="yourmail@gmail.com" />
        <button className="secondary-button"> Submit </button>
      </div>
    </div>
  );
};

export default Contact;
