import React, { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Form, Alert } from "react-bootstrap";
import '/src/signup.css';
import SignIn from "./SignIn";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/SignUp';


function SignUp() {
	const initialValues = { username: "", email: "", password: "",  confirmPassword: "" };
	const [username, setusername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");

	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const [flag, setFlag] = useState(false);
	const [login, setLogin] = useState(true);
	

	
  
	const handleSubmit = (e) => {

		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });

	  e.preventDefault();


	  setFormErrors(validate(formValues));
	  setIsSubmit(true);
	 
	  if (!username || !email || !password || !confirmPassword) {
		setFlag(true);
	  } else {
		setFlag(false);
		localStorage.setItem("bredding", JSON.stringify(username));
		localStorage.setItem("breddingEmail", JSON.stringify(email));
		localStorage.setItem("breddingPassword",JSON.stringify(password));
		localStorage.setItem("breddingPassword", JSON.stringify(confirmPassword));
			console.log("Saved in Local Storage");
			setusername(JSON.stringify(username));
			setPassword(JSON.stringify(password));
		setLogin(!login);
	  }
	};


	
	

  
	useEffect(() => {
	  console.log(formErrors);
	  if (Object.keys(formErrors).length === 0 && isSubmit) {
		console.log(formValues);
	  }
	}, [formErrors]);
	const validate = (values) => {
	  const errors = {};
	  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	  if (!values.username) {
		errors.username = "Username is required!";
	  }
	  if (!values.email) {
		errors.email = "Email is required!";
	  } else if (!regex.test(values.email)) {
		errors.email = "This is not a valid email format!";
	  }
	  if (!values.password) {
		errors.password = "Password is required";
	  } else if (values.password.length < 4) {
		errors.password = "Password must be more than 4 characters";
	  } else if (values.password.length > 10) {
		errors.password = "Password cannot exceed more than 10 characters";
	  }
	  if (!values.confirmPassword) {
		errors.confirmPassword = "Confirm password is required";
	  } else if (values.confirmPassword.length < 4) {
		errors.confirmPassword = "Confirm password must be more than 4 characters";
	  } else if (values.confirmPassword.length > 10) {
		errors.confirmPassword = "Confirm password cannot exceed more than 10 characters";
	  }
	  return errors;
	};
  
	const handleClick = () => {
		setLogin(!login);
	  };





    


	return (	
		<>
 
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleSubmit} style={{marginTop: '10%', marginLeft: '40%'		}}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold'}}>Register</h2> <br />

              <div className="form-group" style={{width: "50%"}}>
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  name="name"
                  onChange={(event) => setusername(event.target.value)}
                />
              </div>
			  <p>{formErrors.username}</p>


              <div className="form-group" style={{width: "50%"}}>
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
			  <p>{formErrors.email}</p>

              <div className="form-group" style={{width: "50%"}}>
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
			  <p>{ formErrors.password }</p>

			  <div className="form-group" style={{width: "50%"}}>
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Confirm Password"
                  onChange={(event) => setconfirmPassword(event.target.value)}
                />
              </div>
			  <p>{formErrors.confirmPassword}</p>

<br/>
           

        
              <button type="submit" className="btn btn-dark btn-sm" style={{width: "100px" , height: '30px', fontSize: '15px'}}>
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <SignIn />
          )}
        </div>				<Footer />

    
    </>

	);
}

export default SignUp;
