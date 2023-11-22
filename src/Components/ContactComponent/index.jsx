import "./styles.css";
import { useState, useRef } from "react";
import CheckmarkSVG from "./Components/CheckmarkSVG";
import LoadingSpinnerSVG from "./LoadingSpinnerSVG";

function ContactComponent() {
  // const [csrfToken, setCsrfToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // useEffect(() => {
  //   fetch(`${window.location.origin}/get-csrf-token`)
  //     .then((response) => response.json())
  //     .then((data) => setCsrfToken(data.csrfToken));
  // }, []);

  function sanitizeInput(str) {
    return str.replace(
      /[&<>"']/g,
      (match) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[match])
    );
  }

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

    const isValid = validateFormInput();

    if (!isValid) {
      console.log("Error submitting form");
      return;
    }

    setIsLoading(true);

    setTimeout(async () => {
      try {
        const sanitizedName = sanitizeInput(name);
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedMessage = sanitizeInput(message);

        const response = await fetch(
          "https://desolate-river-30096-d4bafee74101.herokuapp.com/submitForm",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // "X-CSRF-Token": csrfToken,
            },
            body: JSON.stringify({
              name: sanitizedName,
              email: sanitizedEmail,
              message: sanitizedMessage,
            }),
          }
        );

        const result = await response.json();

        if (result.status === "success") {
          setIsSuccess(true);

          setTimeout(() => {
            setIsSuccess(false);
            setName("");
            setEmail("");
            setMessage("");
          }, 2000);
        } else {
          setIsLoading(false);
          console.log("Error submitting the form. Please try again.");
        }
      } catch {
        // update the DOM here
        console.log("An error occurred. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };
  return (
    <div id="contact-section" className={`contact-section__outer`}>
      <div className={`contact-section`}>
        <div className={`contact-section__inner container`}>
          <h1>Let&apos;s Connect!</h1>
          <p>
            Want to inquire about a project or employment opportunity?<br></br>
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
              {!isLoading && !isSuccess && (
                <button
                  className={`send--btn`}
                  type="submit"
                  disabled={isLoading || isSuccess}
                  style={{
                    visibility: isLoading || isSuccess ? "hidden" : "visible",
                  }}
                >
                  Send
                </button>
              )}
              {isLoading && (
                <div className="loading-wrapper">
                  <LoadingSpinnerSVG />
                </div>
              )}
              {!isLoading && isSuccess && (
                <div className="check-wrapper">
                  <CheckmarkSVG />
                  <p className="message-sent">Sent!</p>
                </div>
              )}

              <span className={`outlook-span`}>
                Have Outlook?<br></br> Simply click&nbsp;
                <a className={`here-link`} href="mailto:ildidvorani@gmail.com">
                  here
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
