import './Footer.css';
import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
const categoryOptions = [
  { value: 'Texture Art', label: 'Texture Art' },
  { value: 'Canvas Painting', label: 'Canvas Painting' },
  { value: 'Charcoal Painting', label: 'Charcoal Sketch' },
  { value: 'Resin Art', label: 'Resin Art' },
  { value: 'Acrylic Pouring', label: 'Acrylic Pouring Art' },
  { value: 'Fabric Painting', label: 'Fabric Painting' },
];

const customStyles = {
  control: (base) => ({
    ...base,
    minHeight: 40,
    borderRadius: 25,
    borderColor: '#ccc',
    paddingLeft: '5px',
    fontSize: '14px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#888',
    },
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
    borderRadius: 15,
    overflow: 'hidden',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#e55757'
      : state.isFocused
      ? '#f0f0f0'
      : '#fff',
    color: state.isSelected ? '#fff' : '#333',
    fontSize: '14px',
    cursor: 'pointer',
  }),
};

const Footer = () => {
  const formRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'category';
    hiddenInput.value = selectedCategory.value;
    formRef.current.appendChild(hiddenInput);

    emailjs
      .sendForm(
        'service_fwfg1kv',
        'template_aar7k61',
        formRef.current,
        'wfI68dQPFPb3z_-of'
      )
      .then(
        () => {
          setShowPopup(true);
          formRef.current.reset();
          setSelectedCategory(categoryOptions[0]);
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
             
            </div>
            <div>
                <Select
                  options={categoryOptions}
                  onChange={setSelectedCategory}
                  value={selectedCategory}
                  styles={customStyles}
                  isSearchable={false}
                />
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

      <div className="footer">
        <div className="footer-content">
          <div className="footer-section logo-section">
            {/* <div className="logo"><img src={image1} alt="logo" style={{}}/></div> */}
            <span className="studio-name">Riya Artist Studio</span>
            <p>Inspired by emotion and driven by passion, we craft unique pieces that bring beauty, meaning, and life into your space.</p>

            <div className="social-icons">
              <a href="https://www.instagram.com/artistic_riya7/" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="footer-section quick-links">
            <h3>Quick Link</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-section art-categories">
            <h3>Art Category</h3>
            <ul>
              <li><Link to="/art-category/textureArt" style={{color:'white'}}>Texture Art</Link></li>
              <li><Link to="/art-category/canvasPainting" style={{color:'white'}}>Canvas Painting</Link></li>
              <li><Link to="/art-category/charcoalSketch" style={{color:'white'}}>Charcoal Sketch</Link></li>
              <li><Link to='/art-category/resinArt' style={{color:'white'}}> Resin Art</Link></li>
              <li><Link to='/art-category/acrylicPouringArt' style={{color:'white'}}>Acrylic Pouring Art</Link></li>
              <li><Link to="/art-category/fabricPainting" style={{color:'white'}}>Fabric Painting</Link></li>
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h3>Contact</h3>
            <p><i className="fas fa-phone icon"></i> +91 9662447547</p>
            <p><i className="fas fa-envelope icon"></i> riyakansagara@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 All rights reserved to <Link to="/">Riya Artist Studio</Link></p>
        </div>
      </div>

      {showPopup && (
  <div className="toast-notification">
    <div className="toast-content">
      <span className="toast-close" onClick={() => setShowPopup(false)}>&times;</span>
      <strong>Thank you!</strong>
      <p>Your message has been successfully sent.</p>
    </div>
  </div>
)}

    </footer>
  );
};

export default Footer;
