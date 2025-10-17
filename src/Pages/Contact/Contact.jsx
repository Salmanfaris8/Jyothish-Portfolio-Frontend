import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css'
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

const Contact = () => {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleCopy = () => {
  const text = "jyothishsuresh00@gmail.com";

  if (navigator.clipboard && window.isSecureContext) {
    // Modern method
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  } else {
    // Fallback method
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px"; // hide it
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Fallback copy failed:", err);
    }
    document.body.removeChild(textArea);
  }
};

  const handleClick = async () => {

     const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }

    setClicked(true);

    try {
      const res = await axios.post("http://localhost:5000/api/contacts", formData);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => setClicked(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='main-contact'>
        <Navbar iscontact={true}/>
          {/* copy */}
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between p-5 mt-5">
          <div className="d-flex align-items-center mb-5 mb-lg-0">
            <h3 className="email-h3 text-white me-2">jyothishsuresh00@gmail.com</h3>
            <button className="copy" onClick={handleCopy}>
              {copied && <span className="tooltip">Copied!</span>}
              <span>
                {!copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                ) : (
                  <svg
                    xmlSpace="preserve"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    viewBox="0 0 24 24"
                    height="18"
                    width="18"
                    className="checkmark"
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      />
                    </g>
                  </svg>
                )}
              </span>
            </button>
          </div>
          <div className="d-flex flex-column ms-lg-5 mt-5 mt-lg-0">
            <input name="name" value={formData.name} onChange={handleChange} className="contact-input mb-3 mb-md-5" type="text" placeholder="Your Name" />
            <input name="email" value={formData.email} onChange={handleChange} className="contact-input mb-3 mb-md-5" type="text" placeholder="Your Email" />
            <textarea name="message" value={formData.message} onChange={handleChange} className="contact-input message mb-3 mb-md-5" placeholder="Your Message"></textarea>
            <button
            className={`button-contact contact-type1 contact-btn ${clicked ? "clicked" : ""}`}
            onClick={handleClick}></button>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Contact
