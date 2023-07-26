import React from 'react'
import './bookingDetail.css'
import check from '../assets/check-circle.svg'
import { Link } from 'react-router-dom'


const BookingDetail = () => {
  return (
    <div className='summary'>
        <div className="img">
            <img src={check} alt="" />
            <p>Booking Success!</p>
        </div>
        <div className="detail">
            <p className='p'>Order Summary</p>
            <div className="invoice">
                <span>Invoice Number</span>
                <p>SP-2302684399</p>
            </div>
            <button>
                <Link to='/'>
                Confirm
                </Link>
            </button>
        </div>
    </div>
  )
}

export default BookingDetail