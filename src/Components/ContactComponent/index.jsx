import "./styles.css";
import { useState, useRef } from "react";
import CheckmarkSVG from "./Components/CheckmarkSVG";

function ContactComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const validateFormInput = () => {
    const isNameValid = name && /^[A-Za-z\s]+$/.test(name);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email);

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);

    if (!isNameValid) {
      nameInputRef.current.focus();
    } else if (!isEmailValid) {
      emailInputRef.current.focus();
    }

    return isNameValid && isEmailValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateFormInput()) {
      console.log("Error submitting form");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (result.status === "success") {
        setName("");
        setEmail("");
        setMessage("");
        alert("Form submitted successfully!");
      } else {
        // Handle error
        // going to change this with updates to the UI
        alert("Error submitting the form. Please try again.");
      }
    } catch {
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div className={`contact-section__outer`}>
      <div className={`contact-section`}>
        <div className={`contact-section__inner container`}>
          <h1>Let&apos;s Connect!</h1>
          <p>
            Want to inquire about a project or employment opportunity?<br></br>{" "}
            Fill out the form below and I will return your message shortly.
          </p>

          <form className={`contact-form`} onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="name-input__wrapper">
                <input
                  ref={nameInputRef}
                  className={`name-input ${nameError ? "input-error" : ""}`}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && (
                  <span className="error-message">
                    Please enter a valid name
                  </span>
                )}
              </div>

              <div className="email-input__wrapper">
                <input
                  ref={emailInputRef}
                  className={`email-input ${emailError ? "input-error" : ""}`}
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <span className="error-message">
                    Please enter a valid email (<i>123@example.com</i>)
                  </span>
                )}
              </div>
            </div>
            <textarea
              className={`message--textarea`}
              name="message"
              placeholder="Message (Optional)"
              id=""
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="button-row">
              <button className={`send--btn`} type="submit">
                Send
              </button>
              <span className={`outlook-span`}>
                Have Outlook?<br></br> Simply click{" "}
                <a className={`here-link`} href="#">
                  here
                </a>
              </span>
              <div className="check-wrapper">
                <div className="wrapper">
                  <CheckmarkSVG></CheckmarkSVG>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
