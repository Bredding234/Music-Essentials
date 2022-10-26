import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;


function SignUp() {
	const [firstName, setfirstName] = useState(' ');
	const [lastName, setlastName] = useState(' ');
	const [email, setEmail] =  useState(' ');
	const [passWrd, setPassword] =  useState(' ');
	const [confirmPassword, setconfirmPassword] =  useState(' ');

	const handlefirstNameChange = (value) => {
		setfirstName(value);
	};
	const handlelastNameChange = (value) => {
		setlastName(value);
	};
	const handleEmailChange = (value) => {
		setEmail(value);
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
	};
	const handleconfirmPasswordChange = (value) => {
		setconfirmPassword(value);
	};
	
	const handleSave = () => {
		const data = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			passWrd: passWrd,
			confirmPassword: confirmPassword,
			IsActive : 1
		};
		const url = 'https://localhost:44372/api/Test/Registration';
		axios.post(url, data).then((result) =>{
			//if(result.data == "Data Inserted.")
			alert(result.data);
		
				//alert(result.data);
			}).catch((error)=>{
				alert(error);
			})
		

	}
	return (
		<div>
			<div className='form'>
				<form className='form-body'>
					<div className='username'>
						<label className='form__label' htmlFor='firstName'>
							First Name{' '}
						</label>
						<input
							style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
							className='form__input'
							type='text'
							id='firstName'
							placeholder='First Name'
							onChange={(e) => handlefirstNameChange(e.target.value) }
							autoComplete='given-name'

						/>
					</div>
					<div className='lastname'>
						<label className='form__label' htmlFor='lastName'>
							Last Name{' '}
						</label>
						<input
							style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
							type='text'
							name=''
							id='lastName'
							className='form__input'
							placeholder='LastName'
							onChange={(e) => handlelastNameChange(e.target.value) }

							autoComplete='family-name'
						/>
					</div>
					<div className='email'>
						<label className='form__label' htmlFor='email'>
							Email{' '}
						</label>
						<input
							style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
							type='email'
							id='email'
							className='form__input'
							placeholder='Email'
							onChange={(e) => handleEmailChange(e.target.value) }

							autoComplete='email'
						/>
					</div>
					<div className='password'>
						<label className='form__label' htmlFor='password'>
							Password{' '}
						</label>
						<input
							style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
							className='form__input'
							type='password'
							id='password'
							placeholder='Password'
							onChange={(e) => handlePasswordChange(e.target.value) }

							autoComplete='new-password'
						/>
					</div>
					<div className='confirm-password'>
						<label className='form__label' htmlFor='confirmPassword'>
							Confirm Password{' '}
						</label>
						<input
							style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
							className='form__input'
							type='password'
							id='confirmPassword'
							placeholder='Confirm Password'
							onChange={(e) => handleconfirmPasswordChange(e.target.value) }
							autoComplete='new-password'
						/>
					</div>

					<div className='flex gap-3 items-center mt-3 ' style={{ position:'relative', left: '20%' }}>
						<Button type= "button" variant='contained' className='order-2 bg-black' onClick={() => handleSave()}>
							<Link to='/'>Sign Up</Link>
						</Button>
						<a className='order-1'  > Forgot Password? </a>

						<Button
							className='order-3 bg-black'
							variant='contained'
							type='button'>
							<Link to='/login'>Login</Link>
						</Button>
					</div>
				</form>

				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: '2%'

					}}>
					<div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />

					<div>
						<p style={{ width: '70px', textAlign: 'center' }}>OR</p>
					</div>

					<div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
				</div>
				<div
					className='social-container flex gap-4 mt-2'
          id='social-media'
					style={{ position: 'relative', left: '30%' }}
          >
					{/* <h3>Social Follow</h3> */}
					<a 
						href='https://www.youtube.com/c/jamesqquick'
						className='youtube social'
            style={{color:'black'}}>
						<FaYoutube className='hover:text-blue-600' size={35} />
					</a>
					<a
						href='https://www.facebook.com/learnbuildteach/'
						className='facebook social'
            style={{color:'black'}}>
						<FaFacebook className= 'hover:text-blue-600' size={35} />
					</a>
					<a
						href='https://www.twitter.com/jamesqquick'
						className='twitter social '
            style={{color:'black'}}>
						<FaTwitter className='hover:text-blue-600' size={35} />
					</a>
					<a
						href='https://www.instagram.com/learnbuildteach'
						className='instagram social'
            style={{color:'black'}}>
						<FaInstagram className='hover:text-blue-600' size={35} />
					</a>
				</div>
			</div>

   <footer class="footer" style={{backgroundColor: 'black',color: 'white', textAlign:'center', position: "fixed",
          left: 0,
          bottom: 0,
          right: 0}}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>	
      
      </div>
	);
}

export default SignUp;
