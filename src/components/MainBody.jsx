import React from 'react'
import data from '../data.js'
import { Routes , Route, Link } from "react-router-dom";
import './mainbody.css'
import image from '../assets/images/images1.jpeg'

console.log(data)


const MainBody = () => {
  return (
    <div className='main-body'>
      <h1>Find</h1>
        <p className='p'>Your best accomodation.</p>
      <div className="body">
      {data.map(room => <div key={room.id} className="main">
        
        {/* {data.map(item => <div className="data">Hello</div>)} */}
        <div className="data">
          <div className="img">
            <Link to={`room/${room.id}`}>
              <img src={room.img} alt="image" />
              room
            </Link>
          </div>
          <div className="text">
            <p><span className='avail'>available</span> <span className='price'>${room.price}</span></p>
            <p>
              <span className="name">{room.type}</span> <span className='like'></span>
            </p>
          </div>
        </div>
      </div>)}
      </div>
     
    </div>
  )
}

export default MainBody