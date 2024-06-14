const Contact = () => {
	return (
		<section className='wrapper bg-white  border-t font-noto'>
			<div className='flex md:flex-row flex-col py-10 gap-8 items-center'>
				<div className='md:w-1/2 flex flex-col text-center md:text-start px-10'>
					<p className='font-bold text-3xl lg:text-5xl mb-2 md:mb-6'>
						Join our shopping community
					</p>
					<p className='text-accent text-sm lg:text-sm'>
						Get notified of discounts and new arrivals.
					</p>
				</div>

				<div className='md:w-1/2 w-full px-10'>
					<form
						action='https://formspree.io/f/mdovqzej'
						method='POST'
						className='relative flex flex-col md:flex-row md:gap-x-4 gap-y-4'>
						<input
							type='email'
							className='relative text-center flex-auto lg:w-[28rem] block px-2 py-3 md:py-4 text-sm md:text-base text-gray-700 bg-white bg-clip-padding border mr-0 border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded-lg'
							placeholder='youremail@gmail.com'
							name='_replyto'
						/>

						<button
							className='inline-block px-10 py-2  text-black font-medium  hover:text-gray-500 hover:text-accent2 bg-accent2 border focus:outline-none focus:ring-0 transition duration-150 ease-in-out rounded-lg gradientGreen text-xs md:text-base'
							type='submit'>
							<div>Subscribe</div>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
