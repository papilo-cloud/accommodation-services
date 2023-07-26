import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'
import cart from '../assets/shopping-cart.svg'
import calendar from '../assets/calendar1.svg'
import { useParams } from 'react-router'
import data from '../data.js'

const Header = ({user}) => {
  const [show, setShow] = useState(false)

  const {userId} = useParams()
    function getId(number) {
        return data.find(
          num => num.id === number
        );
      }

    let room = getId(parseInt(userId, 10))
    console.log(room)

    const months = [
                    'Jan','Feb','March',
                    'April','May','June','July',
                    'August','Sept', 'Oct',
                    'Nov', 'Dec'
                ]
  const night = user?.eday - user?.sday
  const total = night*user?.rooms*room?.price + 25.89 + 18.00;


  const myref = useRef()
  const btnRef = useRef()

  useEffect(() => {
    function showMenu(e) {
      if (!myref.current.contains(e.target) && !btnRef.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.body.addEventListener('click', showMenu)
  }, [show])
  
  return (
    <div>
        <header>
          <h2>Rooms & Suites</h2>
          <nav>
          <div className="hamburger" >
            <button className='cart'>
              <img src={cart} alt="shopping-cart" />
            </button>
            <button className='menu' onClick={() => setShow(true)} ref={btnRef}>
              <img src={menu} alt="icon-menu" />
            </button>
            {/* <div className="cart-item">
            
            {room &<div>
            <div className="check">
              <div className="img">
                <img src={calendar} alt="calendar" />
              </div>
              <div className="text">
                <p>Check In/Out</p>
                <span>{months[user?.smonth]} {user?.sday}-{user?.eday} ({night} Nights)</span>
              </div>
            </div>
            <div className="night">
              <p>{night} Nights</p>
              <p><span>vat($18.00)</span>${total}</p>
            </div>
            <div className="extras">
              <p>Extras</p>
              <div className="mesg">
                <p>Breakfast ($8 day)</p>
                <p>Baby Crib (free)</p>
                <p>Parking ($10 day)</p>
              </div>
            </div>
            <div className="total">
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>}
          </div> */}
           
          </div>
            <ul className={show? 'list show': 'list'} ref={myref}>
              <button onClick={() => setShow(false)}>
                <img src={close} alt="close-menu" />
              </button>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default Header