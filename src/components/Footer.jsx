const Footer = () => {
	const currentYear = new Date().getFullYear();
	const yearTxt = currentYear === 2022 ? '2022' : `2022 - ${currentYear}`;

	return (
		<footer className='footer bg-zinc-800 text-white text-center fixed left-0 bottom-0 h-14 w-full grid place-items-center'>
			Copyright © {yearTxt} Alrights Reserved.
		</footer>
	);
};

export default Footer;
