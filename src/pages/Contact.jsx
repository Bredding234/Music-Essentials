import React, { useState } from 'react'
const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;
function Contact() {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }


  return (
    <div className="container mt-5">
    <h2 className="title"style={{ textAlign: 'center' , fontWeight: 'bold' , fontSize:'2.5rem',  marginTop: '10%' }}>Contact Us</h2> <br /> <br />
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" id="name" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" id="email" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea className="form-control" id="message" required />
      </div>
      <button className="btn btn-danger" type="submit">
        {formStatus}
      </button>
    </form>
    <footer className="footer" style={{backgroundColor: 'black',color: 'white', textAlign:'center', position: "fixed", left: '0',  bottom: '0', right: '0'}}>
 <p> Copyright © { yearTxt } Alrights Reserved.</p>
  </footer>	

  </div>

  )
}

export default Contact
