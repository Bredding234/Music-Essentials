import React, { useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Alert } from "react-bootstrap";
const LOGIN_URL = '/auth';
import AuthContext from "/src/context/AuthProvider"; 
import Button from '@mui/material/Button';
import Footer from '../components/Footer';
import Home from "./Home"; 
import '/src/Signin.css';

import { Link, useNavigate } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


function SignIn() {
	const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();
	


	const [username, setusername] = useState();
	const [password, setpassword] = useState();
	const [errMsg, setErrMsg] = useState();
  const [successMsg, setSuccess] = useState();
	const [flag, setFlag] = useState(false);

	const [home, setHome] = useState(true);

	const initialValues = { username: "", password: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);


	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	  };

	// const handleLogin = () => {
	// 	const data = {
	// 		userName: userName,
	// 		password: password,
			
	// 	};
	// 	const url = 'https://localhost:44372/api/Test/Login';
	// 	axios.post(url, data).then((result) =>{
	// 		//if(result.data == "Data Inserted.")
	// 		alert(result.data);
		
	// 			//alert(result.data);
	// 		}).catch((error)=>{
	// 			alert(error);
	// 		})
		

	// }


    useEffect(() => {
        setErrMsg('');
    }, [username, password])

	const navigateHome = () => {
		navigate('/home');
	};
	const navigateSignUp = () => {
		navigate('/SignUp');
	};
	

  const handleLogin = (e) => {
			e.preventDefault();
			console.log(isSubmit);
			console.log(isSubmit)

			let user = localStorage.getItem("bredding")?.replace(/"/g, ""); // works
			let pass = localStorage.getItem("breddingPassword")?.replace(/"/g, ""); // works
			setFormErrors(validate(formValues));

		   // setIsSubmit(true);
			console.log(isSubmit)

			console.log('username: ', username) // does not work
			console.log('user: ', user) // works
		console.log('password: ', password) // does not work
		console.log('pass: ', pass) // works

			 if (!username || !password) {
		  	 setFlag(true);
			  console.log("EMPTY");
			 } else if (password !== pass || username !== user) {
				setIsSubmit(false);
			} else if (password == pass || username == user) {
				setIsSubmit(true);

			} else {
			   setHome(!home);
			   setIsSubmit(false);
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
		if (!values.userName) {
		  errors.userName = "Username is required!";
		}
		if (!values.password) {
		  errors.password = "Password is required";
		} else if (values.password.length < 4) {
		  errors.password = "Password must be more than 4 characters";
		} else if (values.password.length > 10) {
		  errors.password = "Password cannot exceed more than 10 characters";
		}
		return errors;
	  };

	return (
		<div>
			<br /> <br /> <br /> 
		 {Object.keys(formErrors).length === 0 && isSubmit ? ( 
				<Home />
) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
		  <form onSubmit={handleLogin}  style={{marginTop: '10%', marginLeft: '30%'		}} >
			<h3 style={{ fontSize: '2.5rem', fontWeight: 'bold'}}>Log In</h3>
			<div className="form-group" style={{width: "50%"}}>
			  <label >Username</label> <br />
			  <input
				type="text"
				name="userName"
				className="form-control"
				placeholder="Enter Username"
				value={formValues.userName}
				onChange={handleChange}
				/>
			</div>
			<p>{formErrors.userName}</p>

  
			<div className="form-group" style={{width: "50%"}}>
			  <label>Password</label><br />
			  <input
			 type="text"
              name="password"
			  className="form-control"

              placeholder="password"
              value={formValues.password}
              onChange={handleChange}
				/>
			</div><br />
			<p>{formErrors.password}</p>
			<br />  
			<button type="submit"  className="btn btn-dark btn-sm" style={{width: "100px" , height: '30px', fontSize: '15px'}}>
			  Login
			</button>
  
			{flag && (
			  <Alert color="primary" variant="warning">
				Fill correct Info else keep trying.
			  </Alert>
			)}

			
<span> OR </span>
<button type="submit" onClick={navigateSignUp} className="fluid ui button blue" style={{width: "100px" , height: '30px', fontSize: '15px'}}>
			  Sign Up
			</button>
		  </form>
		) 
		
					<Footer />

	  </div>
	);
}

export default SignIn;
