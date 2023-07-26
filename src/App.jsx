import { useState } from 'react'
import Header from './components/Header'

import './App.css'
import MainBody from './components/MainBody'
import Booking from './components/Booking'
import Room from './components/Room'
import {Routes, Route } from 'react-router'
import Payment from './components/Payment'



function App() {
  const [user, setUser] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(user)
  function handleTotal(params) {
    setTotal(params)
  }

  function handleUser(params) {
    setUser(params)
  }

  return (
    <div className="app">
      <Header user={user} />
      
      <Routes>
        <Route path='/' exact element={<MainBody />} />
        <Route path='room/:userId' element={<Room handleUser={handleUser} />} />
        <Route path='room/:userId/book' element={<Booking user={user} handleTotal={handleTotal} />} />
        <Route path='room/:userId/book/payment' element={<Payment />} />
      </Routes>
    </div>
  )
}

export default App
