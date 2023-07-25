import React from 'react'
import './booking.css'
import calendar from '../assets/calendar.svg'
import arrowdown from '../assets/arrow-down-left.svg'
import arrowup from '../assets/arrow-up-right.svg'
import payment from '../assets/payment-m.svg'

const Booking = () => {
  return (
    <div className='booking'>
        <div className="top">
            <button>L</button>
            <p>booking</p>
            <div className="image">
                Aj
            </div>
        </div>
        <div className="bottom">
        <div className="date">
           <div className="times">
            <div className="time">
                    <div className="check in">
                        <div className="img">
                            <img src={arrowdown} alt="arrow-down" />
                        </div>
                        <div className="txt">
                            <span>Check in</span>
                            <p>11 June</p>
                            <span>2PM-5PM</span>
                        </div>
                    </div>
                    <p className='p'>5 nights</p>
                    <div className="check out">
                        <div className="img">
                            <img src={arrowup} alt="arrow-up" />
                        </div>
                        <div className="txt">
                            <span>Check out</span>
                            <p>16 June</p>
                            <span>6PM-8PM</span>
                        </div>
                    </div>
                </div>
                <div className="pick">
                    <div className="img">
                        <img src={calendar} alt="calendar" />
                    </div>
                    <span>pick date</span>
                </div>
           </div>
           <div className="payment">
                <div className="details">
                    {/* <img src={payment} alt="payment" /> */}
                    <h3>Payment & Details</h3>
                    <div className="contact">
                        <p className='name'>Mr. Abdul Sani</p>
                        <p className="mail">
                            abusani@yahoo.com
                        </p>
                        <p className="phone">
                            +2347064307340
                        </p>
                    </div>
                    <div className="detail">
                        <div className="night">
                            <p>5 Nights <span>x 54</span></p>
                            <p>$270.00</p>
                        </div>
                        <div className="service">
                            <p>Service charges</p>
                            <p>$25.89</p>
                        </div>
                        <div className="vat">
                            <p>Vat </p>
                            <p>$88.00</p>
                        </div>
                    </div>
                </div>
                <div className="total">
                    <div className="price">
                        <span>total</span>
                        <p>$350.59</p>
                    </div>
                    <button>
                        Confirm
                    </button>
                </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Booking