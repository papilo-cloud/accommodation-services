import React from 'react'
import data from '../data.js'
import './mainbody.css'
import image from '../assets/images/images1.jpeg'

console.log(data)


const MainBody = () => {
  return (
    <div className='main-body'>
      <div className="main">
        <h1>Find</h1>
        <p className='p'>Your best accomodation.</p>
        {/* {data.map(item => <div className="data">Hello</div>)} */}
        <div className="data">
          <div className="img">
            <img src={image} alt="image" />
          </div>
          <div className="text">
            <p><span className='avail'>available</span> <span className='price'>$300.00</span></p>
            <p>
              <span className="name">Deluxe Suites.</span> <span className='like'></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody