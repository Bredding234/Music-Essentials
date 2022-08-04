import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function SignUp() {
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
							autoComplete='new-password'
						/>
					</div>
				</form>
				<Button
					style={{ background: 'black', position: 'relative', left: '50%' }}
					variant='contained'>
					<Link to='/'> Sign Up</Link>
				</Button>
				<a> Forgot Password? </a>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: '5%',
					}}>
					<div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />

					<div>
						<p style={{ width: '70px', textAlign: 'center' }}>OR</p>
					</div>

					<div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
				</div>
				<div
					className='social-container flex gap-4'
					style={{ position: 'relative', left: '20%' }}>
					{/* <h3>Social Follow</h3> */}
					<a
						href='https://www.youtube.com/c/jamesqquick'
						className='youtube social'>
						<FaYoutube size={35} />
					</a>
					<a
						href='https://www.facebook.com/learnbuildteach/'
						className='facebook social'>
						<FaFacebook size={35} />
					</a>
					<a
						href='https://www.twitter.com/jamesqquick'
						className='twitter social'>
						<FaTwitter size={35} />
					</a>
					<a
						href='https://www.instagram.com/learnbuildteach'
						className='instagram social'>
						<FaInstagram size={35} />
					</a>
					<Button
						style={{
							background: 'black',
							position: 'relative',
							left: '35%',
							top: '10%',
						}}
						variant='contained'>
						<Link to='/login'>Login</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
