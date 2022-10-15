import React from 'react'

export default function Progress() {
  const MyStyle = {
    width:"5%"
  }
  return (
    <>
       <div className="main-Progress" data-aos="fade-up" >
        <div className="submain-progress">
          <div className="b-btn">
            <button>Join Pre-ICO</button>
          </div>
          <div className="amount">
            <p>Current Donation: <b>$1440</b></p>
            <p>Total Amount Of  Donation: <b>$15000</b></p>
          </div>
          </div>
          <div className="main-trd">
            <div className="fst">
              <p>Total <span className='amt'>$1,440</span></p>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-label="Basic example" style={MyStyle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="last">
              <div className="amt1">
                <p>0</p>
              </div>
              <div className="amt2">
                <p>$15,000</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
