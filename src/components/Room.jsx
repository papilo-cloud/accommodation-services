import React from 'react'
import image from '../assets/images/images1.jpeg'
import './room.css'

const Room = () => {
  return (
    <div className='room'>
        <div className="top">
            <button>L</button>
            <p>room</p>
            <div className="image">
                Aj
            </div>
        </div>
        <div className="img">
            <img src={image} alt="image" />
            <div className="details">
                <p>one</p>
                <p>two</p>
                <p>four</p>
            </div>
        </div>
        <div className="text">
            <h2>Sunny Appartment</h2>
            <p className='p'>120 sq. ft</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Praesentium aspernatur dicta aperiam doloremque nisi enim 
                animi nam distinctio error amet,
                 fugiat libero, optio at quis nostrum iure, asperiores labore esse!</p>
            <div className="likes">
                <div className="div">
                <p>4.8</p>
                <div className="stars">
                    <span className='star'></span>
                </div>
                </div>
                <span className='like'></span>
            </div>
        </div>
        
        <div className="book">
            <div className='price'>
                <p>$54</p> <span>/per day</span>
            </div>
            <button>
                Book Now
            </button>
        </div>
    </div>
  )
}

export default Room