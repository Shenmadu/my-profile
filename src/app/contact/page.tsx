import React from 'react'
import Image from "next/image";
import gmail from "../assests/emailicon.png";
import In from "../assests/icons8-linkedin-logo-24.png";
import git from "../assests/gitimg.png";


function page() {
  return (
    <div className='container'>
      <div className="bbg-transparent text-white">
        <section className="contact">
          <h1 className="header-two">Contact</h1>
          <div className="row col-lg-12" data-aos="fade-up" data-aos-anchor-placement="center-center">

            <div className="icons mt-5">              
              <div className="justify-content-md-start">
                <a href="#">
                  <Image src={gmail} className="m-lg-1" alt="..." />
                  tashen.madu@gmail.com
                </a>  
              </div>               
              <div className="justify-content-md-start mt-3">
                <a href="#">
                  <Image src={In} className="m-lg-1" alt="..." />
                  Tashen Madhuwantha
                </a>  
              </div>
              <div className="justify-content-md-start mt-3">
                <a href="#">
                  <Image src={git} className="m-lg-1" alt="..." />
                  Tashen Madhuwantha
                </a>  
              </div>      


                          
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default page
