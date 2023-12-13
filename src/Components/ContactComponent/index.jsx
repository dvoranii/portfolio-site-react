import "./styles.css";
import { useState, useRef } from "react";
import CheckmarkSVG from "./Components/CheckmarkSVG";
import LoadingSpinnerSVG from "./LoadingSpinnerSVG";
import sanitizeInput from "../../Utils/sanitizeInput";
import validateInput from "../../Utils/validateInput";
import { useCsrfToken } from "../../Hooks/useCSRF";
import { useRecaptcha } from "../../Hooks/useReCAPTCHA";

function ContactComponent() {
  const csrfToken = useCsrfToken();
  const recaptchaToken = useRecaptcha(
    "6LdntzApAAAAAH5dBl-21sMj1Gv0W_EdTEJV5tKF"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {
      name: validateInput.name(formData.name),
      email: validateInput.email(formData.email),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      console.log("Error submitting form");
      return;
    }

    setIsLoading(true);

    const sanitizedData = {
      name: sanitizeInput.text(formData.name),
      email: sanitizeInput.email(formData.email),
      message: sanitizeInput.text(formData.message),
    };

    setTimeout(async () => {
      try {
        // need to change this to heroku URL for production
        // find a way to do both at the same time, or at least create a
        // process that makes this simple
        const response = await fetch("http://localhost:5000/process", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
          body: JSON.stringify({ ...sanitizedData, recaptchaToken }),
          credentials: "include",
          mode: "cors",
        });

        const result = await response.json();

        if (result.status === "success") {
          setIsSuccess(true);

          setTimeout(() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          }, 2000);
        } else {
          setIsLoading(false);
          console.log("Error submitting the form. Please try again.");
        }
      } catch (error) {
        console.log("An error occurred. Please try again later.", error);
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
                  className={`name-input ${errors.name ? "input-error" : ""}`}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="error-message">
                    Please enter a valid name
                  </span>
                )}
              </div>

              <div className="email-input__wrapper">
                <input
                  ref={emailInputRef}
                  className={`email-input ${errors.email ? "input-error" : ""}`}
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
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
              value={formData.message}
              onChange={handleChange}
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
