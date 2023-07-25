import React, { useState } from 'react'
import { useParams } from 'react-router';
import DatePicker from "react-datepicker";
import data from '../data.js'

import "react-datepicker/dist/react-datepicker.css";

import image from '../assets/images/images1.jpeg'
import down from '../assets/down-arrow.svg'
import caret from '../assets/caret-left.svg'
import ac from '../assets/air-c.svg'
import bed from '../assets/bed.svg'
import shower from '../assets/shower.svg'
import wifi from '../assets/wifi.svg'

import './room.css'
import { Link } from 'react-router-dom';

const Room = ({handleUser}) => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [mr, setMr] = useState('Mr')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [mail, setMail] = useState('')
    const [guests, setGuests] = useState(0)
    const [adults, setAdults] = useState(0)
    const [click, setClick] = useState(false)

    const {userId} = useParams();

    function getId(number) {
        return data.find(
          num => num.id === number
        );
      }

    let room = getId(parseInt(userId, 10))
    console.log(room.img)

    

    function handleSubmit(e) {

        e.preventDefault();
        handleUser({
            fname,
            lname,
            mail,
            title: mr,
            sday: startDate.getDate(),
            smonth: startDate.getMonth(),
            eday: endDate.getDate(),
            emonth: endDate.getMonth(),
            diff:  endDate.getDate()-startDate.getDate(),
            hours: startDate.getHours(),
            guests,
            adults,
        })
        setAdults('')
        setFname('')
        setLname('')
        setMail('')
    }
    function handleClick(params) {
        
        if (guests > 0 && adults > 0) {
            setClick(true)
        } else{
            alert('Guests and Adults cannot be 0 or negative')
        }
    }

  return (
    <div className='room'>
    {!click? (<>
        <div className="top">
            <button>
            <Link to='/'>
                <img src={caret} alt="caret-left" />
            </Link>
            </button>
            <p>room</p>
            <div className="image">
                
            </div>
        </div>
        <div className="img">
            <img className='img1' src={`.${room.img}`} alt="image" />
            <div className="details">
                <div className="imgs">
                    <img src={bed} alt="bed-image" />
                    <span>{room.bed}</span>
                </div>
                <div className="imgs">
                    <img src={ac} alt="ac-image" />
                    <span>{room.ac}</span>
                </div>
                <div className="imgs">
                    <img src={shower} alt="shower-image" />
                    <span>{room.shower}</span>
                </div>
                {room.wifi && <div className="imgs">
                    <img src={wifi} alt="wifi-image" />
                </div>}
            </div>
        </div>
        <div className="text">
            <h2>{room.type}</h2>
            <p className='p'>120 sq. ft</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Praesentium aspernatur dicta aperiam doloremque nisi enim 
                animi nam distinctio error amet,
                 fugiat libero, optio at quis nostrum iure, asperiores labore esse!</p>
            <div className="likes">
                <div className="div">
                <p>{room.stars}</p>
                <div className="stars">
                    <span className='star'></span>
                </div>
                </div>
                <span className='like'></span>
            </div>
        </div>
        <div className="check-in">
            <div className="date">
                <div className="check">
                    <p>Check In</p>
                    <p>Check Out</p>
                </div>
                <div className='div'>
                    <div className="picker">
                        <DatePicker 
                            className='date-picker'
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            dateFormat="d MMMM yyyy"
                            fixedHeight
                        />
                        <img src={down} alt="down-arrow" />
                    </div>
                    <div className="picker">
                        <DatePicker
                            className='date-picker'
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            dateFormat="d MMMM yyyy"
                            fixedHeight
                            calendarClassName='cal-name'
                        />
                        <img src={down} alt="down-arrow" />
                    </div>
                </div>
                <div className="number">
                    <label>
                        <p>Guests</p>
                        <div>
                            <input type="number" placeholder='0'
                            value={guests}
                            onChange={(e)=> setGuests(e.target.value)}
                            min={1}
                             />
                            <img src={down} alt="down-arrow" />
                        </div>
                    </label>
                    <label>
                        <p>Adults</p>
                        <div>
                            <input type="number" 
                            value={adults}
                            onChange={(e)=> setAdults(e.target.value)}
                            min={1}
                            placeholder='0' />
                            <img src={down} alt="down-arrow" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
        
        <div className="book">
            <div className='price'>
                <p>${room.price}</p> <span>/per day</span>
            </div>
            <button type='button' onClick={handleClick}>
                Book Now
            </button>
        </div>
        </>
    ) :
        <section>
            <div className="back">
                <button onClick={() => setClick(false)}>
                    <img src={caret} alt="caret-left" />
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Mr.' value={mr}
                onChange={(e) => setMr(e.target.value)}/>
                <input type="text" value={fname}
                required
                placeholder='First Name'
                 onChange={(e) => setFname(e.target.value)}
                  />
                <input type="text" value={lname}
                required
                onChange={(e) => setLname(e.target.value)}
                 placeholder='First Name' />
                <input type="mail" value={mail}
                required
                 onChange={(e) => setMail(e.target.value)}
                 placeholder=' Email Address' />
                 <button type="submit">Submit</button>
            </form>
        </section>
    }
    </div>
  )
}

export default Room