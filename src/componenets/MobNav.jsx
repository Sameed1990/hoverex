import { useState } from 'react'
import logo from '../img/logo.webp'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolid, faBars } from '@fortawesome/fontawesome-free-solid'
import icon from '../img/down-chevron.png'
import close from '../img/close (1).png'



export default function MobNav() {
    const [showMobNavLinks, setShowMobNavLinks] = useState("none")
    const MyStyle = {
        color: '#1aafe9'
    }
    const My2 = {
        color : 'white'
    }
    const Open = () =>{
        document.getElementById("drop").style.top  = "0"
        document.getElementById("drop").style.height  = "100%"
    }
    const Close = () =>{
        document.getElementById("drop").style.top  = "-1340px"
        document.getElementById("drop").style.height  = "0"

    }
    const OpenSub = () => {
        document.getElementById("a").style.top  = "35px"
        document.getElementById("a").style.zIndex  = "1px"
        document.getElementById("a").style.zIndex  = "1" 
        document.getElementById("a").style.opacity  = "1"
        document.getElementById("none").style.display  = "none"
        document.getElementById("rotate").style.display  = "block"
    
        console.log("ok");
        console.log("1");   
    }
    const CloseSub = () => {
        document.getElementById("a").style.top  = "0px"
        document.getElementById("a").style.zIndex  = "-1"

        document.getElementById("none").style.display  = "block"
        document.getElementById("rotate").style.display  = "none"
        document.getElementById("a").style.opacity  = "0"
   
        

    }
    const OpenSub2 = () => {
        document.getElementById("a1").style.top  = "30px"
        document.getElementById("a1").style.opacity  = "1"
        document.getElementById("a1").style.zIndex  = "1"
        document.getElementById("none2").style.display  = "none"
        document.getElementById("rotate2").style.display  = "block"
    
        console.log("ok");
        console.log("1");   
    }
    const CloseSub2 = () => {
        document.getElementById("a1").style.top  = "0px"
        document.getElementById("a1").style.zIndex  = "-1"
        document.getElementById("none2").style.display  = "block"
        document.getElementById("rotate2").style.display  = "none"
        document.getElementById("a").style.opacity  = "0"
   
        

    }
   
    const OpenSub3 = () => {
        document.getElementById("a2").style.top  = "30px"
        document.getElementById("a2").style.opacity  = "1"
        document.getElementById("a2").style.zIndex  = "1"
        document.getElementById("none3").style.display  = "none"
        document.getElementById("rotate3").style.display  = "block"
    
        console.log("ok");
        console.log("1");   
    }
    const CloseSub3 = () => {
        document.getElementById("a2").style.top  = "0px"
        document.getElementById("a2").style.zIndex  = "-1"
        document.getElementById("none3").style.display  = "block"
        document.getElementById("rotate3").style.display  = "none"
        document.getElementById("a2").style.opacity  = "0"
   
        

    }

    const OpenSub4 = () => {
        document.getElementById("a3").style.top  = "30px"
        document.getElementById("a3").style.opacity  = "1"
        document.getElementById("a3").style.zIndex  = "1"
        document.getElementById("none4").style.display  = "none"
        document.getElementById("rotate4").style.display  = "block"
    
        console.log("ok");
        console.log("1");   
    }
    const CloseSub4 = () => {
        document.getElementById("a3").style.top  = "0px"
        document.getElementById("a3").style.zIndex  = "-1"
        document.getElementById("none4").style.display  = "block"
        document.getElementById("rotate4").style.display  = "none"
        document.getElementById("a3").style.opacity  = "0"
   
        

    }
   
    return (
        <>
            <nav className="Mob-nav">
                <div className="nav-logo">
                    <img src={logo} alt="" />
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
                <div className="toggle-btn" >
                    <a href="#" onClick={Open}>
                        <FontAwesomeIcon icon={faBars} style={MyStyle} />
                    </a>
                </div>

                <div className="ul" id='drop'>
                    <div className="close-icon">
                        <img src={close} onClick = {Close} alt="" />
                    </div>
                    <div className="logo-Mob">
                        <img src={logo} alt="" />
                    </div>
                    <div className="mian-mob-cont">
                        {/* 1 */}
                    <div className="mob-cont ">
                    <div className="li1"> Home  </div>
                    <div className="img-submenu">
                        <img src={icon} alt="" onClick={OpenSub} id = 'none' />
                        <img src={icon} alt="" onClick={CloseSub} id='rotate' />
                    </div>


                    </div>
                    <div className="ul-submenu" id='submenu'>
                        <ul id='a' className='a1'>
                            <li><a href="" >CRYPTOCURRENCY</a></li>
                            <li><a href="" >ELEMENTOR DEMO</a></li>
                            <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                            <li><a href="" >ICO DONATION</a></li>
                            <li><a href="" >BOXED VERSION</a></li>
                            <li><a href="" >NFT SHOP</a></li>
                            <li><a href="" >CORPORATE</a></li>
                            <li><a href="" >NEWS PORTAL</a></li>
                        </ul>
                    </div>
                    {/* 2 */}
                    <div className="mob-cont">
                    <div className="li1"> Home  </div>
                    <div className="img-submenu">
                        <img src={icon} alt="" onClick={OpenSub2} id = 'none2' />
                        <img src={icon} alt="" onClick={CloseSub2} id='rotate2' />
                    </div>


                    </div>
                   
                    <div className="ul-submenu" id='submenu'>
                        <ul id='a1'>
                            <li><a href="" >CRYPTOCURRENCY</a></li>
                            <li><a href="" >ELEMENTOR DEMO</a></li>
                            <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                            <li><a href="" >ICO DONATION</a></li>
                            <li><a href="" >BOXED VERSION</a></li>
                            <li><a href="" >NFT SHOP</a></li>
                            <li><a href="" >CORPORATE</a></li>
                            <li><a href="" >NEWS PORTAL</a></li>
                        </ul>
                    </div>

                         {/* 3 */}
                         <div className="mob-cont">
                    <div className="li1"> Home  </div>
                    <div className="img-submenu">
                        <img src={icon} alt="" onClick={OpenSub3} id = 'none3' />
                        <img src={icon} alt="" onClick={CloseSub3} id='rotate3' />
                    </div>


                    </div>
                   
                    <div className="ul-submenu" id='submenu'>
                        <ul id='a2'>
                            <li><a href="" >CRYPTOCURRENCY</a></li>
                            <li><a href="" >ELEMENTOR DEMO</a></li>
                            <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                            <li><a href="" >ICO DONATION</a></li>
                            <li><a href="" >BOXED VERSION</a></li>
                            <li><a href="" >NFT SHOP</a></li>
                            <li><a href="" >CORPORATE</a></li>
                            <li><a href="" >NEWS PORTAL</a></li>
                        </ul>
                    </div>

                        {/* 4 */}
                        <div className="mob-cont">
                    <div className="li1"> Home  </div>
                    <div className="img-submenu">
                        <img src={icon} alt="" onClick={OpenSub4} id = 'none4' />
                        <img src={icon} alt="" onClick={CloseSub4} id='rotate4' />
                    </div>


                    </div>
                   
                    <div className="ul-submenu" id='submenu'>
                        <ul id='a3'>
                            <li><a href="" >CRYPTOCURRENCY</a></li>
                            <li><a href="" >ELEMENTOR DEMO</a></li>
                            <li><a href="" >VIDEO BACKGROUND DEMO</a></li>
                            <li><a href="" >ICO DONATION</a></li>
                            <li><a href="" >BOXED VERSION</a></li>
                            <li><a href="" >NFT SHOP</a></li>
                            <li><a href="" >CORPORATE</a></li>
                            <li><a href="" >NEWS PORTAL</a></li>
                        </ul>
                    </div>

                 
                    
                    </div>
                    
                </div>

            </nav>
        </>
    )
}
