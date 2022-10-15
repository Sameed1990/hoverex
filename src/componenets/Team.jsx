import React from 'react'
import team1 from '../img/team1.jpg'
import team2 from '../img/team2.jpg'
import team3 from '../img/team3.jpg'
import team4 from '../img/team4.jpg'


export default function Team() {
    return (
        <>
            <div className="main-heading"data-aos="fade-up">
                <h1>Hoverex Team</h1>
            </div>
            <div className="team-para"data-aos="fade-up">
                <p>Let us introduce you to the team that
                    will make it all happen.</p>
            </div>
            <div className="main-team"data-aos="fade-up">
                <div className="submain-team">
                    <div className="back-white-circle"></div>
                    <div className='yugu6t57'>
                        <div className="team-img">
                            <img src={team1} alt="" />
                        </div>
                        <div className="team-p-name">
                            <h4>Mark Nichols</h4>
                        </div>
                        <div className="team-designation">
                            <p>Co-Founder</p>
                        </div>
                    </div>
                </div>
                <div className="submain-team">
                    <div className="back-white-circle"></div>
                    <div className='yugu6t57'>
                        <div className="team-img">
                            <img src={team2} alt="" />
                        </div>
                        <div className="team-p-name">
                            <h4>Mark Nichols</h4>
                        </div>
                        <div className="team-designation">
                            <p>Co-Founder</p>
                        </div>
                    </div>
                </div>
                <div className="submain-team">
                    <div className="back-white-circle"></div>
                    <div className='yugu6t57'>
                        <div className="team-img">
                            <img src={team3} alt="" />
                        </div>
                        <div className="team-p-name">
                            <h4>Mark Nichols</h4>
                        </div>
                        <div className="team-designation">
                            <p>Co-Founder</p>
                        </div>
                    </div>
                </div>
                <div className="submain-team">
                    <div className="back-white-circle"></div>
                    <div className='yugu6t57'>
                        <div className="team-img">
                            <img src={team4} alt="" />
                        </div>
                        <div className="team-p-name">
                            <h4>Mark Nichols</h4>
                        </div>
                        <div className="team-designation">
                            <p>Co-Founder</p>
                        </div>
                    </div>
                </div>
                
                {/* <div className="submain-team">
                    <div className="team-img">
                        <img src={team1} alt="" />
                    </div>
                    <div className="team-p-name">
                        <h4>Mark Nichols</h4>
                    </div>
                    <div className="team-designation">
                        <p>Co-Founder</p>
                    </div>
                </div>
                <div className="submain-team">
                    <div className="team-img">
                        <img src={team1} alt="" />
                    </div>
                    <div className="team-p-name">
                        <h4>Mark Nichols</h4>
                    </div>
                    <div className="team-designation">
                        <p>Co-Founder</p>
                    </div>

                </div>
                <div className="submain-team">
                    <div className="team-img">
                        <img src={team1} alt="" />
                    </div>
                    <div className="team-p-name">
                        <h4>Mark Nichols</h4>
                    </div>
                    <div className="team-designation">
                        <p>Co-Founder</p>
                    </div>

                </div> */}
            </div>
        </>
    )
}
