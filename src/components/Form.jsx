import React from 'react'

const Form = () => {
  return (
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
            </form>
  )
}

export default Form