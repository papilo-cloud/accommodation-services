import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'
import cart from '../assets/shopping-cart.svg'
import { useParams } from 'react-router'
import Cart from './Cart'

const Header = ({user}) => {
  const [show, setShow] = useState(false)
  const [carts, setCarts] = useState(false)

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
            <button className='cart' onClick={() => setCarts(!carts)}>
                <span className="top"></span>
              <img src={cart} alt="shopping-cart" />
            </button>
            <button className='menu' onClick={() => setShow(true)} ref={btnRef}>
              <img src={menu} alt="icon-menu" />
            </button>
            {carts &&
              <div className="cart-item">
                <Cart user={user} />
              </div>
            }
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