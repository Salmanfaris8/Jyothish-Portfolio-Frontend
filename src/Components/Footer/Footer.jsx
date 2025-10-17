import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import be from '../../assets/be.png'
import mail from '../../assets/mail.png'
import linkedin from '../../assets/linkedin.png'


const Footer = () => {
  return (
    <>
      <div className="footer-section d-flex justify-content-lg-between justify-content-center align-items-top px-md-5">
            <div className="nav-links d-lg-flex mt-lg-2 gap-4 d-none">
              <a href="/" className="nav-item">Home</a>
              <a href="/about" className="nav-item">About me</a>
            </div>

            <div className="footer-center">
              <h2 className="footer-text">Thank you for your interest in my work!</h2>
              <div className="social-icons d-flex justify-content-center gap-5 mt-4">
                <a href="https://www.linkedin.com/in/jyothish-ms-736621363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " target="_blank">
                  <img className="icon" src={linkedin} alt="" />
                </a>
                <a href="https://www.behance.net/jyothishsuresh" target="_blank">
                  <img className="icon" src={be} alt="" />
                </a>
                <a href="mailto:jyothishsuresh00@gmail.com">
                  <img className="icon" src={mail} alt="Email" />
                </a>
              </div>
            </div>

            <div className="nav-links d-lg-flex mt-lg-2 gap-4 d-none">
              <a href="/works" className="nav-item">Works</a>
              <a href="/contact" className="nav-item">Contact</a>
            </div>
          </div>
    </>
  )
}

export default Footer
