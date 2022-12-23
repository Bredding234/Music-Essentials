import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<div className='bg-black text-white h-screen container mx-auto'>
			<div className='h-full flex justify-center items-center'>
				<div className='flex flex-col gap-4'>
					<Link to='/signup' className='btn btn-primary w-60 hover:text-black'>
						Sign Up
					</Link>
					<Link to='/login' className='btn btn-primary w-60 hover:text-black'>
						Log In
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
