import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ isabout, ishome, isworks, iscontact }) => {
  const navigate = useNavigate()

  const handleNav = (path) => {
    // Close the offcanvas
    const offcanvasEl = document.getElementById('offcanvasRight')
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl)
    if (bsOffcanvas) bsOffcanvas.hide()

    // Navigate
    navigate(path)
  }

  return (
    <>
      <div>
        <div className='d-flex align-items-center py-4 pt-md-5 pe-md-5 pe-3'>
          {/* Desktop Links */}
          <div className='navbar-links d-none d-md-flex justify-content-around w-100'>
            <Link to="/" className={`nav-link link fs-5 ${ishome ? "fw-medium text-white" : "fw-light text-secondary"}`}>Home</Link>
            <Link to="/about" className={`nav-link link fs-5 ${isabout ? "fw-medium text-white" : "fw-light text-secondary"}`}>About Me</Link>
            <Link to="/works" className={`nav-link link fs-5 ${isworks ? "fw-medium text-white" : "fw-light text-secondary"}`}>Works</Link>
            <Link to="/contact" className={`nav-link link fs-5 ${iscontact ? "fw-medium text-white" : "fw-light text-secondary"}`}>Contact</Link>
          </div>

          {/* LinkedIn always visible */}
          <div>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jyothish-ms-736621363" className="nav-link link text-white fs-2 me-3 d-none d-md-inline">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>

          {/* Menu icon (only mobile) */}
          <button className="btn btn-outline-light rounded d-md-none ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Offcanvas Right */}
      <div className="offcanvas offcanvas-end bg-black text-white" tabIndex="-1" id="offcanvasRight">
        <div className="offcanvas-header d-flex justify-content-between">
          <h5 className="offcanvas-title"></h5>
          <button type="button" className="btn btn-outline-light rounded" data-bs-dismiss="offcanvas" aria-label="Close">✕</button>
        </div>
        <div className="offcanvas-body d-flex flex-column ps-5">
          <button className="btn nav-link link mb-3 fs-5 text-start" onClick={() => handleNav('/')}>Home</button>
          <button className="btn nav-link link mb-3 fs-5 text-start" onClick={() => handleNav('/about')}>About Me</button>
          <button className="btn nav-link link mb-3 fs-5 text-start" onClick={() => handleNav('/works')}>Works</button>
          <button className="btn nav-link link mb-3 fs-5 text-start" onClick={() => handleNav('/contact')}>Contact</button>

          <div>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jyothish-ms-736621363" className="nav-link link text-white fs-2 me-3 d-inline d-md-none">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
