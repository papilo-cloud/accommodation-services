import React from 'react'
import './booking.css'
import calendar from '../assets/calendar.svg'
import arrowdown from '../assets/arrow-down-left.svg'
import arrowup from '../assets/arrow-up-right.svg'
import payment from '../assets/payment-m.svg'
import caret from '../assets/caret-left.svg'
import data from '../data.js'

import { Link, useParams } from 'react-router-dom'

const Booking = ({user, handleTotal}) => {

    const {userId} = useParams()
    function getId(number) {
        return data.find(
          num => num.id === number
        );
      }

    let room = getId(parseInt(userId, 10))

    const months = [
                    'January','February','March',
                    'April','May','June','July',
                    'August','September', 'October',
                    'Noveember', 'December'
                ]
    const rDay = user.eday - user.sday;
    const total = rDay*user.rooms*room.price + 25.89 + 18.00;
    const subTotal = rDay*user.rooms*room.price;

  return (
    <div className='booking'>
        <div className="top">
        <button>
            <Link to={`/room/${userId}`}>
                <img src={caret} alt="caret-left" />
            </Link>
            </button>
            <p>booking</p>
            <div className="image">
                <p>{user.fname[0].toUpperCase()+user.lname[0].toUpperCase()}</p>
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
                            <p>{user.sday} {months[user.smonth]}</p>
                            <span>2PM-5PM</span>
                        </div>
                    </div>
                    <p className='p'>{rDay} nights</p>
                    <div className="check out">
                        <div className="img">
                            <img src={arrowup} alt="arrow-up" />
                        </div>
                        <div className="txt">
                            <span>Check out</span>
                            <p>{user.eday} {months[user.emonth]}</p>
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
                    <h3>Details</h3>
                    <div className="contact">
                        <p className='name'>{ user.title+' '+user.fname +' '+user.lname}</p>
                        <p className="mail">
                            {user.mail}
                        </p>
                        <p className="phone">
                            {user.number}
                        </p>
                    </div>
                    <div className="detail">
                        <div className="night">
                            <p>{user.rooms} Rooms x {rDay} Nights <span>x {room.price}</span></p>
                            <p>${subTotal} </p>
                        </div>
                        <div className="service">
                            <p>Service charges</p>
                            <p>$25.89</p>
                        </div>
                        <div className="vat">
                            <p>Vat </p>
                            <p>$18.00</p>
                        </div>
                    </div>
                </div>
                <div className="total">
                    <div className="price">
                        <span>total</span>
                        <p>${total}</p>
                    </div>
                    <button>
                    <Link to={`/room/${userId}/book/payment`}>
                        Confirm
                    </Link>
                    </button>
                </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Booking