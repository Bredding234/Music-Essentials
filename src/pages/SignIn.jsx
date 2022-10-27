import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


function SignIn() {
	const [userName, setuserName] = useState(' ');
	const [password, setpassword] = useState(' ');

	const handleuserNameChange = (value) => {
		setuserName(value);
	};
	const handlePasswordChange = (value) => {
		setpassword(value);
	};

	const handleLogin = () => {
		const data = {
			userName: userName,
			password: password,
			
		};
		const url = 'https://localhost:44372/api/Test/Login';
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
						<label className='form__label' htmlFor='Username'>
							Username{' '}
						</label>
						<input
							style={{ height: 40, borderColor: 'black', borderWidth: 1 }}
							className='form__input'
							type='text'
							id='Username'
							placeholder='Username'
							onChange={(e) => handleuserNameChange(e.target.value) }
							autoComplete='given-name'
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

					<div
						className='flex gap-3 items-center mt-3'
						style={{ position: 'relative', left: '20%' }}>
						<a className='order-1'> Forgot Password? </a>

						<Button
							className='order-3 bg-black'
							variant='contained'
							onClick={() => handleLogin()}
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
						marginTop: '2%',
					}}>
					<div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />

					<div>
						<p style={{ width: '70px', textAlign: 'center' }}>OR</p>
					</div>

					<div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
				</div>
				<div
					className='social-container flex gap-4 mt-2'
					style={{ position: 'relative', left: '30%' }}>
					{/* <h3>Social Follow</h3> */}
					<a
						href='https://www.youtube.com/c/jamesqquick'
						className='youtube social'
						style={{ color: 'black' }}>
						<FaYoutube className='hover:text-red-600' size={35} />
					</a>
					<a
						href='https://www.facebook.com/learnbuildteach/'
						className='facebook social'
						style={{ color: 'black' }}>
						<FaFacebook className='hover:text-blue-600' size={35} />
					</a>
					<a
						href='https://www.twitter.com/jamesqquick'
						className='twitter social'
						style={{ color: 'black' }}>
						<FaTwitter className='hover:text-blue-600' size={35} />
					</a>
					<a
						href='https://www.instagram.com/learnbuildteach'
						className='instagram social'
						style={{ color: 'black' }}>
						<FaInstagram className='hover:text-pink-600' size={35} />
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default SignIn;
