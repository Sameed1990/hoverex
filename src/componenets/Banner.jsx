import React, { useState } from 'react'
import facebook from '../img/facebook.png'

export default function Banner() {

  // Set the date we're counting down to
  var countDownDate = new Date("Dec 10, 2022 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";
    if (days < 10) {
      var res = '0' + days
      days = res
    }
    if (hours < 10) {
      var res = '0' + hours
      hours = res
    }
    if (minutes < 10) {
      var res = '0' + minutes
      minutes = res
    }
    if (seconds < 10) {
      var res = '0' + seconds
      seconds = res
    }
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds




    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  return (
    <>
      <div className="main-banner">
        <div className="main1">
          <div className="submain1">
            <div className="heading">
              <h1>Hoverex Cryptocurrency <br /> Pre-ICO starts in:</h1>
            </div>
            <div className="counter">
              <div className="main-counter">
                <div className='count-cont'>
                  <div id="days" className='count' ></div>
                  <p>Days</p>
                </div>
                <div className='count-cont'>
                  <div id="hours" className='count' ></div>
                  <p>Hours</p>
                </div>
                <div className='count-cont'>
                  <div id="minutes" className='count' ></div>
                  <p>Minutes</p>
                </div>
                <div className='count-cont'>
                  <div id="seconds" className='count' ></div>
                  <p>Seconds</p>
                </div>

              </div>
            </div>
          </div>
          <div className="submain2">
            <div className="icon-parent">
              <div className="icon">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="icon">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="icon">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="icon">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="icon">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="icon">
                <img src={facebook} alt="facebook" />
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  )
}
