import React from 'react';
import './Contact.css';
const Contact=()=>{
  return(
    <>
      <div className="c-page">
        <div className="c-left">
          <div className="awesome">
            <span>Get In Touch</span>
            <span>Contact Me</span>
            <div className="blur c-blur1" 
            style={{background:"#ABF1FF94"}}
            ></div>
          </div>
        </div>
        <div className="c-right">
          <form>
            Name* : <input type="text" name="name" plaaceholder="Enter Name" required/> <br/>
            Email* : <input type="text" name="email" plaaceholder="Enter Email" required/><br/>
            Message* : <textarea cols="40 " rows="5" name="user" plaaceholder="Enter Name" required/>
            <button type="sumbit" class="button" >Mail Me</button>
            <div className="blur c-blur2" style={{background:"var(--orange)"}}></div>
          </form>
        </div>  
      </div>
    </>
  )
}
export default Contact;