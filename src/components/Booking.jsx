import React from 'react'
import './booking.css'

const Booking = () => {
  return (
    <div className='booking'>
        <div className="top">
            <button>L</button>
            <p>room</p>
            <div className="image">
                Aj
            </div>
        </div>
        <div className="date">
           <div className="times">
            <div className="time">
                    <div className="check in">
                        <div className="img">
                            {/* <img src="" alt="" /> */}
                            img
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
                            {/* <img src="" alt="" /> */}
                            img
                        </div>
                        <div className="txt">
                            <span>Check out</span>
                            <p>16 June</p>
                            <span>6PM-8PM</span>
                        </div>
                    </div>
                </div>
                <div className="pick">
                    <h1>hii</h1>
                    <span>pick date</span>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Booking