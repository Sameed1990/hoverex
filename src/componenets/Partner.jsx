import React from 'react'
import logo1 from '../img/logo1.webp'
import logo2 from '../img/logo2.webp'
import logo3 from '../img/logo3.webp'
import logo4 from '../img/logo4.webp'
import logo5 from '../img/logo5.webp'
import logo6 from '../img/logo6.webp'
import logo7 from '../img/logo7.webp'
import logo8 from '../img/logo8.webp'
import AOS  from 'aos'
import 'aos/dist/aos.css'
export default function Partner() {
  
  AOS.init();
  return (
    <>
       <div className="Partner-heading">
                    <h1 >
                    Supported by Global Partners
                    </h1>
                </div>
                <div className="main-partner" data-aos="fade-down">
                  <div className="logo">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="logo">
                    <img src={logo2} alt="" />
                  </div>
                  <div className="logo">
                    <img src={logo3} alt="" />
                  </div>
                  <div className="logo">
                    <img src={logo4} alt="" />
                  </div>
                  <div className="logo none "  >
                    <img src={logo5} alt="" />
                  </div>
                  <div className="logo none "  >
                    <img src={logo6} alt="" />
                  </div>
                  <div className="logo none "  >
                    <img src={logo7} alt="" />
                  </div>
                  <div className="logo none "  >
                    <img src={logo8} alt="" />
                  </div>
                </div>
                <div className="partner-btn">
                  <button>View All Partner</button>
                </div>



    </>
  )
}
