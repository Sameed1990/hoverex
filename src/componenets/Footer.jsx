import React from 'react'
import logo from '../img/logo-footer.webp'
import facebook from '../img/facebook.png'
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-logo">

                    <img src={logo} alt="" />
                </div>
                <div className="footer-para">
                    <p>
                        Subscribe to be informed about token
                        sale in advance</p>
                </div>
                <div className="main-mail">
                    <div className="input">
                        <input type="email" placeholder='Email' name="" id="" />
                    </div>
                    <div className="footer-btn">
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="icons">
                    <div className="foot-i">
                        <a href="/">
                        <img src={facebook} alt="" />
                        </a>
                    </div>
                    <div className="foot-i">
                    <a href="/">
                        <img src={facebook} alt="" />
                        </a>
                    </div>
                    <div className="foot-i">
                    <a href="/">
                        <img src={facebook} alt="" />
                        </a>
                    </div>
                    <div className="foot-i">
                    <a href="/">
                        <img src={facebook} alt="" />
                        </a>
                    </div>
                    <div className="foot-i">
                    <a href="/">
                        <img src={facebook} alt="" />
                        </a>
                    </div>
                </div>
                <div className="footer-last">
                    <p> <a href="/">ThemeREX</a> © 2022 All rights reserved. </p>
                </div>
            </footer>
        </>
    )
}
