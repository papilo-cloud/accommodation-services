import React from 'react'
import data from '../data.js'
import calendar from '../assets/calendar1.svg'

const Cart = ({user}) => {

    function getId(number) {
        return data.find(
          num => num.id === number
        );
      }

    let room = getId(parseInt(user?.user, 10))
    console.log(room)

    const months = [
                    'Jan','Feb','March',
                    'April','May','June','July',
                    'Aug','Sept', 'Oct',
                    'Nov', 'Dec'
                ]
  const total = user.diff*user?.rooms*room?.price + 25.89 + 18.00;

  return (
    <div>
        {user?.user ?<div>
            <div className="check">
              <div className="img">
                <img src={calendar} alt="calendar" />
              </div>
              <div className="text">
                <p>Check In/Out</p>
                <span>{months[user?.smonth]} {user?.sday}-{months[user.emonth]} {user?.eday} ({user.diff} Nights)</span>
              </div>
            </div>
            <div className="night">
              <p>{user.diff} Nights</p>
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
          </div>:
          <div className='empty'>
            <p>Empty Cart</p>
          </div>
          }
    </div>
  )
}

export default Cart