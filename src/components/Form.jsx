import React from 'react'
import {useState} from 'react';
import Emailjs from '@emailjs/browser/'
import "../styles/Form.css";


function Form () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState ('')


function sendEmail(e) {
  e.preventDefault();

  if (name === '' ||  email==='' || message==='') {
    alert("fill out all input entries correctly");
    return
  }



  const templateParams = {
    from_name: name,
    message: message,
    email: email,
  }



  Emailjs.send("gmailMessage", "template_36xzzsm", "templateParams", "z2vhi0C3RsaOCV9XF")
  .then((response) => {
    console.log("EMAIL SENT", response.status, response.text)
    setName('')
    setEmail('')
    setMessage('')

  }, (err) => {
    console.log("ERROR: ", err)
  })

}

  return (
    <div className="container">
      <h1 className="title"> Contact me </h1>

      <form className="form" onSubmit={sendEmail} >
        <input 
            className= "input"
            type="text" 
            Placeholder="Enter your first name" 
            onChange={(e) => setName(e.target.value)} 
            value={name}
            />   

        <input 
            className= "input"
            type="text" 
            Placeholder="Enter your email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            />   

        <textarea 
            className="textarea"
            placeholder="Enter your message"
            onChange={(e) => setMessage(e.target.value)} 
            value={message}
            />   

        <input className="button" type="submit" value="Send" />

      </form>      
    </div>     
  );
}

export default Form
