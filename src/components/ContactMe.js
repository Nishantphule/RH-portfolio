import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const form = useRef();

  // Notify with a pending toast
  const notifyPending = () => {
    toast.info("Sending email to Raj!", {
      toastId: "pending-toast", // Unique ID to manage this specific toast
    });
  };

  const notifySuccess = () => {
    toast.dismiss("pending-toast"); // Dismiss the pending toast
    toast.success("Email sent successfully!");
  };

  const notifyFail = () => {
    toast.dismiss("pending-toast"); // Dismiss the pending toast
    toast.error("Failed to send Email...");
  };

  const validateForm = () => {
    const formData = new FormData(form.current);
    const errors = {};

    // Check if fields are empty
    if (!formData.get("from_name")) {
      errors.from_name = "Full name is required.";
    }

    if (!formData.get("from_email")) {
      errors.from_email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("from_email"))) {
      errors.from_email = "Email address is invalid.";
    }

    if (!formData.get("message")) {
      errors.message = "Message is required.";
    }

    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      // If validation fails, show error toast
      toast.error("Please fill in all fields correctly.");
      return;
    }

    // Call notifyPending before sending the email
    notifyPending();
    emailjs
      .sendForm("service_kbputkf", "template_a6brdvc", form.current, {
        publicKey: "JmOs0Caqk2WEFm2GP",
      })
      .then(
        () => {
          notifySuccess();
        },
        (error) => {
          notifyFail();
          console.log("Failed to send Email...", error.text);
        }
      );
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">GET IN TOUCH.</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="from_name"
              className="form-input"
              placeholder="Full name"
              data-form-input
            />

            <input
              type="email"
              name="from_email"
              className="form-input"
              placeholder="Email address"
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" value="Send">
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default ContactMe;
