import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './About.css'
import Footer from '../../Components/Footer/Footer'
import resume from '../../assets/resume-jyo.pdf'

const About = () => {
  return (
    <>
      <div className='main-about'>
        <Navbar isabout={true}/>
        <div className='about-div'>
          <h1 className='about-h1'>UX/UI designer passionate about creating intuitive digital experiences. Based in Ernakulam, Kerala.</h1>
        </div>
        <div>
          {/* bio */}
          <div className='d-flex flex-column align-items-center flex-md-row justify-content-end'>
              <h2 className='bio-h2 me-lg-3'>BIO</h2>
            <div>
              <p className='bio-p fw-lighter'>With a background in photo editing, I developed a strong eye for detail and visual storytelling. My journey into UI/UX design grew from a desire to go beyond aesthetics and create meaningful, user-centered digital experiences. I specialize in combining research, prototyping, and design to deliver solutions that are intuitive, functional, and visually refined. </p>
            </div>
          </div>
          {/* skill */}
          <div className='skill-div d-flex flex-column flex-lg-row justify-content-end mt-5'>
            <div className='skill-div1 d-flex flex-column align-items-center flex-md-row me-lg-5'>
              <h1 className='bio-h2 me-lg-5 me-md-4'>Skills</h1>
              <div className='d-flex flex-column mt-3 mt-sm-0'>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> User Interface (UI) Design</span>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> Experience (UX) Design</span>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> Wireframing and Prototyping</span>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> Web Design</span>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> User Research</span>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> Communication Skills</span>
              </div>
              
            </div>
            <div className='skill-div2 d-flex flex-column align-items-center flex-md-row'>
              <h1 className='bio-h2 me-lg-5 me-md-3'>Design Tools</h1>
              <div className='d-flex flex-column mt-3 mt-sm-0'>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> User Interface (UI) Design</span>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> Experience (UX) Design</span>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> Wireframing and Prototyping</span>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> Web Design</span>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> User Research</span>
                <span className='bio-span fw-lighter'><i class="bi bi-dot"></i> Communication Skills</span>
              </div>
              
            </div>
          </div>
          {/* education */}
          <div className='edu-div d-flex flex-column mt-5'>
            <div className='d-flex d-flex flex-column align-items-center align-items-md-start flex-md-row w-100'>
              <h1 className='bio-h2 me-lg-5 me-md-4'>Education</h1>
              <div className='edu-cour d-flex flex-column align-items-center align-items-md-start flex-lg-row justify-content-between'>
                <p className='edu-p fw-lighter'>UI/UX Designing, Zoople Technologies , Ernakulam </p>
                <p className='edu-p fw-lighter'>OCT 2024 - MAR 2025</p>
              </div>
              
            </div>
            <div className='d-flex w-100'>
              <div className='edu-colldiv d-flex flex-column align-items-center flex-lg-row justify-content-between w-100'>
                <div className='edu-p edu-coll '>
                  <span className='fw-lighter d-block'>Bachelor of ComputerApplication(BCA)</span>
                  <span className='fw-lighter'>MES T O Abdulla Memorial College Kunnukara</span>
                </div>
                <p className='edu-p edu-p1 fw-lighter'>2021 - 2024</p>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center my-5'>
            <button onClick={() => window.open(resume, "_blank")}
              className='resume type1'>
              <span className='btn-txt  '>Resume</span>
            </button>
            </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default About
