import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import profile from '../../assets/profile.png'
import uiux from '../../assets/ui-ux.png'
import prototype from '../../assets/prototype.png'
import problem from '../../assets/problem.png'
import book from '../../assets/book.png'
import test from '../../assets/test.png'
import collab from '../../assets/collab.png' 
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import axios from 'axios'
import Footer from '../../Components/Footer/Footer'

const Home = () => {

  const [allworks,setAllorks] = useState([])

  useEffect(() => {
    gsap.to(".name-h1", {
      color: "black",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  useEffect(()=>{
    getallworks()
  },[])

  const getallworks = async () =>{
    try{
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/getallworks`)
      setAllorks(response)
    }
    catch(err){
      console.log(err);
    }
  }  

  return (
    <>
      <div>
        <div className='main-navbar'>
          <Navbar ishome={true}/>
          {/* profile */}
          <div className='name-div'>
            <h1 className='name-h1'>JYOTHISH MS</h1>
            <span className='name-span'>ui/ux designer</span>
            <span className='des-span'>with a passion for creating thoughtful and visually <br /> stunning digital experiences.</span>
            <a href="#works" className='view-main d-flex align-items-center nav-link'>
              <span className='view-span'><i className="bi bi-arrow-down-right-circle"></i></span>
              <span className='ms-3 view-span1'>view projects</span>
            </a>
          </div>
          {/* about */}
          <div className='d-flex flex-column flex-md-row align-items-center p-lg-5 p-4'>
            <div className=''>
              <img className='about-img' src={profile} alt="" />
            </div>
            <div className='about-main text-white p-lg-4 p-md-3 p-3'>
              <h3 className='about-h3 fw-light mb-lg-4 mb-md-2'>About me</h3>
              <h2 className='about-h2 mb-lg-5 mb-md-2 mb-3'>Evolving to create <br className='d-md-none d-lg-block' /> impactful experiences</h2>
              <p className='about-p d-none d-md-block'>I thrive on understanding user behavior, uncovering pain points, and transforming them into seamless solutions through research-driven design. Whether it’s building clean interfaces, refining user flows, or enhancing accessibility, my goal is always to put the user at the heart of every decision. <br className='d-md-none d-lg-block' />
              With hands-on experience in tools like Figma, Adobe Creative Suite, and prototyping platforms, I bring ideas to life with clarity and precision. Beyond tools, what sets me apart is my ability to empathize with users and translate their needs into designs that truly solve problems. <br className='d-md-none d-lg-block' />
              My commitment lies in creating impactful products that not only look elegant but also make everyday interactions smoother and more meaningful.</p>
              <p  className='about-p d-block d-md-none'>I design with a user-first mindset—uncovering behaviors, pain points, and needs to craft seamless, accessible experiences. With hands-on expertise in Figma, Adobe Creative Suite, and prototyping, I bring ideas to life with clarity and precision. What sets me apart is my ability to empathize with users and translate insights into elegant, impactful designs that make everyday interactions smoother and more meaningful.</p>
            </div>
          </div>
          {/* am i */}
          <div className='text-white p-4 mt-3 mt-md-0 p-md-4 p-lg-5'>
            <h2 className='fw-light'>Who am i</h2>
            <div className='d-flex flex-column flex-md-row align-items-md-center'>
              <div>
                <h1 className='who-h1'>I’m a designer who turns complex ideas into simple, meaningful experiences that users love</h1>
              </div>
              <div className="side-line d-none d-md-inline"></div>
              <div>
                <p className='who-p'>My skillset is constantly evolving. I value open communication and believe a strong team thrives on shared learning. I’m always eager to contribute my knowledge and learn from others.  </p>
              </div>
            </div>
            <div className='d-flex flex-column flex-md-row justify-content-around mt-md-5 mt-2'>
              <div className='d-flex flex-column mt-5'>
                <h2 className='mb-md-4 mb-3'>Soft Skills</h2>
                <span className='who-span'><i className="bi bi-record-circle me-3"></i> Communication</span>
                <span className='who-span'><i className="bi bi-record-circle me-3"></i> Problem-solving & critical thinking</span>
                <span className='who-span'><i className="bi bi-record-circle me-3"></i> Empathy</span>
                <span className='who-span'><i className="bi bi-record-circle me-3"></i> Collaboration</span>
                <span className='who-span'><i className="bi bi-record-circle me-3"></i> Time management & organization</span>
              </div>
              <div className='d-flex flex-column mt-5'>
                <h2 className='mb-md-4 mb-3'>Hard Skills</h2>
                <span className='who-span'><i className="bi bi-record-circle me-3"></i> Wireframing & prototyping</span>
                <span className='who-span'><i className="bi bi-record-circle me-3"></i> Visual design</span>
                <span className='who-span'><i className="bi bi-record-circle me-3"></i> Usability testing & user research</span>
                <span className='who-span'><i className="bi bi-record-circle me-3"></i> HTML/CSS basics</span>
                <span className='who-span'><i className="bi bi-record-circle me-3"></i> Design systems & accessibility standards</span>
              </div>
            </div>
          </div>
          {/* offer */}
          <div className='text-white p-4 p-md-4 p-lg-5 mt-4'>
            <h2 className='fw-light'>What can i offer</h2>
            <div className='d-flex flex-column flex-md-row align-items-md-center'>
              <div>
                <h1 className='who-h1'>Design that speaks, experiences that last.</h1>
              </div>
              <div className="side-line d-none d-md-inline"></div>
              <div>
                <p className='who-p'>I combine my background in education with a deep passion for design, offering fresh ideas, empathy, and a dedication to mastering UI/UX. </p>
              </div>
            </div>
            <div className='offer-div'>
              {/* message */}
              <p className='scroll-message text-center mt-3 mb-4 d-block d-xxl-none'>
                <i className="bi bi-arrow-right-circle me-2"></i>
                Please scroll right to see more
              </p>
              <div  className='offer-div1 pb-5'>
                {/* offer-1 */}
                <div className='offers-main d-flex flex-column justify-content-center align-items-center'>
                  <h2 className="title">UI Design</h2>
                  <div className="content">
                    <img className='offer-img' src={uiux} alt="" />
                    <p>I craft elegant UI designs that <br /> balance aesthetics with <br /> usability</p>
                  </div>
                </div>
                {/* offer-2 */}
                <div className='offers-main d-flex flex-column justify-content-center align-items-center'>
                  <h2 className="title">Prototyping</h2>
                  <div className="content">
                    <img className='offer-img' src={prototype} alt="" />
                    <p>I turn concepts into clickable <br /> prototypes that showcase <br /> functionality and flow</p>
                  </div>
                </div>
                {/* offer-3 */}
                <div className='offers-main d-flex flex-column justify-content-center align-items-center'>
                  <h2 className="title">Problem Solving</h2>
                  <div className="content">
                    <img className='offer-img' src={problem} alt="" />
                    <p>I approach design challenges <br /> with creativity and logic to <br /> deliver effective solutions</p>
                  </div>
                </div>
                {/* offer-4 */}
                <div className='offers-main d-flex flex-column justify-content-center align-items-center'>
                  <h2 className="title">User Research</h2>
                  <div className="content">
                    <img className='offer-img' src={book} alt="" />
                    <p>I translate user behaviors and <br /> pain points into meaningful <br /> design solutions</p>
                  </div>
                </div>
                {/* offer-5 */}
                <div className='offers-main d-flex flex-column justify-content-center align-items-center'>
                  <h2 className="title">Usability Testing</h2>
                  <div className="content">
                    <img className='offer-img' src={test} alt="" />
                    <p>I test designs with real users <br /> to ensure products are <br /> intuitive, accessible, and <br /> effective</p>
                  </div>
                </div>
                {/* offer-6 */}
                <div className='offers-main d-flex flex-column justify-content-center align-items-center'>
                  <h2 className="title">Collaboration</h2>
                  <div className="content">
                    <img className='offer-img' src={collab} alt="" />
                    <p>I work closely with cross- <br />functional teams to turn ideas <br /> into seamless user <br /> experiences</p>
                  </div>
                </div>
              </div>
              {/* works */}
              <div id='works' className='text-white p-lg-5 p-md-3 p-1'>
                <h2 className='fw-light'>My works</h2>
                <div>
                  <h1 className='who-h1'>The projects I've been working on.</h1>
                  <div className='d-flex flex-column mt-5 '>
                    {
                      allworks.data?.length>0?
                      allworks.data.map((works,index)=>(
                        <Link key={index} to={`/${works.id}/workdetails`} className="text-decoration-none text-white">
                          <div className='border mt-5'>
                            <div className='work-div d-flex flex-column flex-md-row p-3 p-md-2 p-lg-4'>
                                <img className='work-img' src={`${import.meta.env.VITE_API_URL}${works.image}`} alt="" />
                                <div className='ms-md-5'>
                                  <h2 className='work-h2 mt-4'>{works.heading}</h2>
                                  <p className='work-p mt-md-3 mt-lg-5'>{works.description}</p>
                                </div>
                            </div>
                          </div>
                        </Link>
                      ))
                      :
                      <div className='d-flex justify-content-center py-5'>
                        <div class="wrapper">
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="shadow"></div>
                            <div class="shadow"></div>
                            <div class="shadow"></div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Home
