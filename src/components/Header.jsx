import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'

const Header = () => {
  const [show, setShow] = useState(false)

  const myref = useRef()

  useEffect(() => {
    function showMenu(e) {
      // if (!myref.current.contains(e.target)) {
      //   setShow(false)
      // }
    }
    document.body.addEventListener('click', showMenu)
  }, [])
  
  return (
    <div>
        <header>
          <nav>
          <h2>Rooms & Suites</h2>
          <div className="hamburger" >
            <button onClick={() => setShow(!show)}>
              <img src={menu} alt="icon-menu" />
            </button>
          </div>
            <ul className={show? 'list show': 'list'}>
              <button onClick={() => setShow(!show)}>
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