import { useState } from 'react'
import Header from './components/Header'

import './App.css'
import MainBody from './components/MainBody'
import Booking from './components/Booking'
import Room from './components/Room'
import {Routes, Route } from 'react-router'



function App() {
  const [user, setUser] = useState([]);
  console.log(user)

  function handleUser(params) {
    setUser(params)
    // console.log(params)
  }

  return (
    <div className="app">
      <Header />
      
      <Routes>
        <Route path='/' exact element={<MainBody />} />
        <Route path='room/:userId' element={<Room handleUser={handleUser} />} />
        <Route path='room/:userId/num' element={<Booking />} />
      </Routes>
    </div>
  )
}

export default App
