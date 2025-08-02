import './Footer.css';
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

const Footer = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fwfg1kv',
        'template_aar7k61',
        formRef.current,
        'wfI68dQPFPb3z_-of'
      )
      .then(
        () => {
          alert('Form submitted successfully!');
          formRef.current.reset();
        },
        (error) => {
          alert('Failed to send form. Please try again.');
          console.error(error);
        }
      );
  };

  return (
    <footer>
      <div className="contact-sections">
        <div className="contact-left">
          <h2>
            Get In <span>Touch</span>
          </h2>
          <p>
            We'd love to hear from you! Whether you have a question about a painting, want to request a custom piece, or just want to say hello — feel free to reach out.
            Riya Artist Studio is always here to bring your creative vision to life.
          </p>

          <h4>Contact Details</h4>
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-phone"></i>
              </div>
              <span>+91 9662447547</span>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <span>riyakansagara@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h4>Fill The Form</h4>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="user_name" placeholder="Full Name" required />
              <select name="category" required>
                <option value="">Art Category</option>
                <option value="Painting">Painting</option>
                <option value="Sketching">Sketching</option>
                <option value="Portrait">Portrait</option>
              </select>
            </div>
            <div className="form-row">
              <input type="email" name="user_email" placeholder="Email Address" required />
              <input type="text" name="user_phone" placeholder="Mobile Number" required />
            </div>
            <div className="form-row full">
              <textarea name="message" placeholder="Message" required></textarea>
            </div>
            <button type="submit">Submit Form</button>
          </form>
        </div>
      </div>
      <div className='footer'>
      <div className="footer-content">
        <div className="footer-section logo-section">
          <div className="logo">A<span>&</span>S</div>
          <span className="studio-name">Riya Artist Studio</span>
          <p>Inspired by emotion and driven by passion, we craft unique pieces that bring beauty, meaning, and life into your space.</p>

          <div className="social-icons">
            <a href="https://www.instagram.com/artistic_riya7/" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section art-categories">
          <h3>Art Category</h3>
          <ul>
            <li>Texture Art</li>
            <li>Charcoal Sketch</li>
            <li>Resin Art</li>
            <li>Acrylic Pouring Art</li>
            <li>Fabric Painting</li>
            <li>Canvas Painting</li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact</h3>
          <p><i className="fas fa-phone icon"></i> +91 9662447547</p>
          <p><i className="fas fa-envelope icon"></i> riyakansagara@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 All rights reserved to <a href="#">Riya Artist Studio</a></p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;