import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function SignUp() {
  return (
    <div>
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input   style={{ height: 40, borderColor: 'black', borderWidth: 1 }}  className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input   style={{ height: 40, borderColor: 'black', borderWidth: 1 }}  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input      style={{ height: 40, borderColor: 'black', borderWidth: 1 }} type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input   style={{ height: 40, borderColor: 'black', borderWidth: 1 }} className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input   style={{ height: 40, borderColor: 'black', borderWidth: 1 }} className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
<Button style={{background: 'black', position: 'relative', left: '50%' }} variant="contained"><a href="/login"> Sign Up </a></Button>
<a> Forgot Password? </a> 
<div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '5%'}}
      >
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

        <div>
          <p style={{width: '70px', textAlign: 'center'}}>OR</p>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
      </div>
      <div class="social-container" style={{ position: 'relative', left:'20%' }}>
      {/* <h3>Social Follow</h3> */}
      <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x"style={{position: 'relative', left: '5%'}} />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x"style={{position: 'relative', left: '10%'}} />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x"style={{position: 'relative', left: '15%'}} />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x"style={{position: 'relative', left: '20%'}} />
      </a>
      <Button style={{background: 'black', position: 'relative', left: '35%', top: '10%' }} variant="contained">Login</Button>
</div>

     </div>
    </div>

  )
}

export default SignUp
