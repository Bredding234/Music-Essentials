import { genres } from '../data/genres';

const Genres = () => {
	return (
		<div className='container mx-auto md:mt-20 mt-24 p-5'>
			<div className='flex flex-col items-center gap-5'>
				{genres.map(genre => {
					return (
						<button
							key={genre.id}
							className='btn btn-primary md:w-96 md:h-24 w-60 h-16'>
							{genre.name}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Genres;
