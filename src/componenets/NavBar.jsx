import React from 'react'
// import HoverMenu from '../Hover.js'
import logo from '../img/logo.webp'
export default function NavBar() {
  
  return (
    <>
      <nav className='Main-Nav'>
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigation-options">
          <ul className='main-ul'>
            <li><a href="#" id='List1'> Home </a>
              <ul className="sublist list1">
                <li><a href="" >CRYPTOCURRENCY</a></li>
                <li><a href="" >ELEMENTOR DEMO</a></li>
                <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                <li><a href="" >ICO DONATION</a></li>
                <li><a href="" >BOXED VERSION</a></li>
                <li><a href="" >NFT SHOP</a></li>
                <li><a href="" >CORPORATE</a></li>
                <li><a href="" >NEWS PORTAL</a></li>
              </ul>

            </li>
            <li><a href="#" id='List2'> Home </a>
              <ul className="sublist list2">
                <li><a href="" >CRYPTOCURRENCY</a></li>
                <li><a href="" >ELEMENTOR DEMO</a></li>
                <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                <li><a href="" >ICO DONATION</a></li>
                <li><a href="" >BOXED VERSION</a></li>
                <li><a href="" >NFT SHOP</a></li>
                <li><a href="" >CORPORATE</a></li>
                <li><a href="" >NEWS PORTAL</a></li>
              </ul>

            </li>
            <li><a href="#" id='List3'> Home </a>
              <ul className="sublist list3">
                <li><a href="" >CRYPTOCURRENCY</a></li>
                <li><a href="" >ELEMENTOR DEMO</a></li>
                <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                <li><a href="" >ICO DONATION</a></li>
                <li><a href="" >BOXED VERSION</a></li>
                <li><a href="" >NFT SHOP</a></li>
                <li><a href="" >CORPORATE</a></li>
                <li><a href="" >NEWS PORTAL</a></li>
              </ul>

            </li>

            <li><a href="#" id='List3'> Home </a>
              <ul className="sublist list3">
                <li><a href="" >CRYPTOCURRENCY</a></li>
                <li><a href="" >ELEMENTOR DEMO</a></li>
                <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                <li><a href="" >ICO DONATION</a></li>
                <li><a href="" >BOXED VERSION</a></li>
                <li><a href="" >NFT SHOP</a></li>
                <li><a href="" >CORPORATE</a></li>
                <li><a href="" >NEWS PORTAL</a></li>
              </ul>

            </li>








          </ul>
        </div>
        <div className="lang-main">
          <ul className=" main-ul   lan-ul">
            <li><a href="#" id='List3'> English </a>
              <ul className="sublist list3">
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Home </a></li>
              </ul>

            </li>
          </ul>
        </div>
        <div className="nav-btn"><button>Login & SignUp</button></div>
      </nav>
    </>
  )
}

