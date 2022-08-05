import React, { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <div className="contact-banner">
        <div className="overlay">
          <div className="text">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>

      <div className="contact-info container">
        <div className="info">
          <h3>Questions, Comments? You tell us. We listen.</h3>
          <p>Email: info@example .com</p>
          <p>
            Toll-free number: 1800 123 4567,
            <br />
            Monday to Saturday – 9:00 am to 7:00 pm
            <br />
            Sunday – 10:00 am to 5:00 pm
          </p>
          <h5>Need Us? Call Us.</h5>
          <h3>1800 123 4567</h3>
        </div>
        <div className="form">
          <input
            className="form-control"
            type="text"
            placeholder="NAME"
            required
          />
          <input
            className="form-control"
            type="text"
            placeholder="SUBJECT"
            required
          />
          <input
            className="form-control"
            type="email"
            placeholder="EMAIL"
            required
          />
          <textarea
            className="form-control"
            rows="8"
            placeholder="MESSAGE"
          ></textarea>
          <button type="submit">Submit</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
