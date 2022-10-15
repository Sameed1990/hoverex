import React from 'react'
import icon1 from '../img/icon1.png'

export default function Feature() {
    return (
        <>
            <div className="feature-heading">
                <h1>Features of Hoverex</h1>
            </div>
            <div className="faeture-para">
                <p>Hoverex brings together vendors and buyers without a central bank or single administrator to ensure clear and fair deals</p>
            </div>
            <div className="main-feature" data-aos="fade-up">
                <div className="submain-feature">
                    <div className="cart1">
                        <div className="img-feature">
                            <a href="/">
                                <img src={icon1} alt="" />
                            </a>
                        </div>
                        <div className="submain-heading">
                            <h5> <a href="/"> Lower Transaction Costs</a> </h5>
                        </div>
                        <div className="submain-para">
                            <p>A decentralized platform available to customers with lower transaction payments and operational expenses.</p>
                        </div>
                        <div className="cart-btn"><button>Learn More</button></div>
                    </div>
                    <div className="cart1">
                        <div className="img-feature">
                            <a href="/">
                                <img src={icon1} alt="" />
                            </a>
                        </div>
                        <div className="submain-heading">
                            <h5> <a href="/"> Lower Transaction Costs</a> </h5>
                        </div>
                        <div className="submain-para">
                            <p>A decentralized platform available to customers with lower transaction payments and operational expenses.</p>
                        </div>
                        <div className="cart-btn"><button>Learn More</button></div>
                    </div>
                    <div className="cart1">
                        <div className="img-feature">
                            <a href="/">
                                <img src={icon1} alt="" />
                            </a>
                        </div>
                        <div className="submain-heading">
                            <h5> <a href="/"> Lower Transaction Costs</a> </h5>
                        </div>
                        <div className="submain-para">
                            <p>A decentralized platform available to customers with lower transaction payments and operational expenses.</p>
                        </div>
                        <div className="cart-btn"><button>Learn More</button></div>

                    </div>
                </div>
                
            </div>
        </>
    )
}
