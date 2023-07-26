import React, { useState } from 'react'
import { useParams } from 'react-router'
import './payment.css';
import BookingDetail from './BookingDetail';

const Payment = () => {
  const [holder, setHolder] = useState('')
  const [number, setNumber] = useState()
  const [cvc, setCvc] = useState()
  const [isTrue, setIsTrue] = useState(false)
  const [isTrue1, setIsTrue1] = useState(false)
  const [isTrue2, setIsTrue2] = useState(false)
  const [active, setActive] = useState(false)

  const {userId} = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    if (!number || number.length != 16) {
      setIsTrue1(true)
      // setActive(false)
    }else{
      setIsTrue1(false)
    }
    if (!holder || holder.trim().length < 0) {
      setIsTrue(true)

    }else{
      setIsTrue(false)
    }
    if (!cvc || cvc.length > 3) {
      setIsTrue2(true)
    }else{
      setIsTrue2(false)
    }
   if (number.length == 16 && holder.trim().length > 0 && cvc.length == 3) {
    setActive(true)
   }
  }

  return (
    <section className='payment'>
      {!active?(
      <form>
        <label>
          <p>Cardholder Name</p>
          <input type="text" required placeholder='e.g. John Doe' value={holder} onChange={(e) => setHolder(e.target.value)} />
          <span className={!isTrue? 'span': 'span error'}>Name cannot be empty</span>
        </label>
        <label>
          <p>Card Number</p>
          <input type="number" required placeholder='e.g. 1234 5678 9123 0000' value={number} onChange={(e) => setNumber(e.target.value)}  />
          <span className={!isTrue1? 'span': 'span error'}>Please enter a valid card number.</span>
        </label>
        <div>
        <label>
          <p>Exp. Date (MM/YY)</p>
          <input type="number" required placeholder='e.g. MM' />
          <input type="number" required placeholder='e.g. YY' />
        </label>
          <label>
            <p>cvc</p>
            <input type="number" required placeholder='e.g. 123'  value={cvc} onChange={(e) => setCvc(e.target.value)}  />
            <span className={!isTrue2? 'span': 'span error'}>Please enter a valid CVC.</span>
          </label>
        </div>
        <button onClick={handleSubmit}>
          Proceed To Payment
        </button>
      </form>):(
      <BookingDetail />
      )}
    </section>
  )
}

export default Payment