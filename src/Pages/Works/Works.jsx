import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Works.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

const Works = () => {

    const [allworks,setAllorks] = useState([])

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
      <div className='main-works'>
        <Navbar isworks={true}/>
        <div className='work-div'> 
          <h1 className='works-h1 fw-bold'>WORKS</h1>
        </div>
        <div className='all-works m-4 m-md-5'>
          <div className='d-flex flex-column mt-5'>
            {/* works */}
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
        <Footer/>
      </div>
    </>
  )
}

export default Works
