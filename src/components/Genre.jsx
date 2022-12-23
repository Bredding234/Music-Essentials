import { useState } from 'react';

const Genre = ({ imgUrl, text }) => {
	const [isHovering, setIsHovering] = useState(false);

	const showHover = () => {
		setIsHovering(true);
	};

	const hideHover = () => {
		setIsHovering(false);
	};

	return (
		<div
			onMouseOver={showHover}
			onMouseLeave={hideHover}
			className='border rounded-lg overflow-hidden h-72 relative'>
			<img src={imgUrl} alt='' className='w-full h-full scale-1' />
			<div className={`${isHovering ? 'block' : 'hidden'}`}>
				<span className='text-3xl text-white  absolute top-0 left-0 w-full h-full z-10 grid place-items-center'>
					{text}
				</span>
			</div>
			<div className='hover:bg-zinc-600 transition-hover opacity-70 duration-300 ease-in mix-blend-screen absolute top-0 left-0 w-full h-full z-10 grid place-items-center'></div>
		</div>
	);
};

export default Genre;
