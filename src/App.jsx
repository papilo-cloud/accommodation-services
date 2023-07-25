import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import MainBody from './components/MainBody'
import Room from './components/Room'
import Booking from './components/Booking'



function App() {
  const [user, setUser] = useState([]);
  console.log(user)

  function handleUser(params) {
    setUser(params)
    // console.log(params)
  }

  return (
    <div className="app">
      {/* <Header />
      <MainBody /> */}
      <Room handleUser={handleUser} />
      {/* <Booking /> */}
    </div>
  )
}

export default App
