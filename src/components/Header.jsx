import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'
import cart from '../assets/shopping-cart.svg'

const Header = () => {
  const [show, setShow] = useState(false)

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
          <nav>
          <h2>Rooms & Suites</h2>
          <div className="hamburger" >
            <button onClick={() => setShow(true)} ref={btnRef}>
              <img src={menu} alt="icon-menu" />
            </button>
          </div>
            <ul className={show? 'list show': 'list'} ref={myref}>
              <button onClick={() => setShow(false)}>
                <img src={close} alt="close-menu" />
              </button>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li className='cart'>
                  <img src={cart} alt="shopping-cart" />
              </li>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default Header