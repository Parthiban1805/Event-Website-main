import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import video from '../../assets/video.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css';

const ContactForm = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 2000 }); 
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k5mglau",
        "template_1xow74h",
        form.current,
        "AJYf9_s2AMZbJ_r5f"
      )
      .then(
        () => {
          swal("Success", "Your message has been sent!", "success");
          form.current.reset();
        },
        (error) => {
          swal(
            "Failed",
            "There was an error sending your message. Please try again.",
            "error"
          );
        }
      );
  };

  return (
    <div className="contact-form-container">
      <div className="image-container" data-aos="fade-right">
        <video width="600" autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="form-container" data-aos="fade-left">
        <h2>Get in Touch</h2>
        <h3>RUN WITH US</h3>
        <p>Reach out and we'll get in touch within 24 hours.</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-row" data-aos="fade-up">
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className="input-row" data-aos="fade-up">
            <input type="tel" placeholder="Telephone" name="number" />
            <input type="number" placeholder="Age" name="age" />
          </div>
          <textarea placeholder="Message..." name='message' data-aos="fade-up"></textarea>
          <button type="submit" data-aos="fade-up">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
