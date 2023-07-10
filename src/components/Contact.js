const Contact = () => {
	return (
		<section className="wrapper bg-white  border-t border-b font-noto">
			<div className="flex md:flex-row sm:flex-col py-10 gap-8 items-center">
				<div className="md:w-1/2 sm:flex flex-col sm:text-center md:text-start sm:px-10">
					<p className="font-bold sm:text-3xl lg:text-5xl sm:mb-2 md:mb-6">
						Join our shopping community
					</p>
					<p className="text-accent sm:text-sm lg:text-sm">
						Get notified of discounts and new arrivals.
					</p>
				</div>

				<div className="md:w-1/2 sm:w-full sm:px-10">
					<form
						action="https://formspree.io/f/mdovqzej"
						method="POST"
						className="relative flex sm:flex-col md:flex-row md:gap-x-4 gap-y-4">
						<input
							type="email"
							className="relative sm:text-center flex-auto lg:w-[28rem] block px-2 sm:py-3 md:py-4 sm:text-sm md:text-base text-gray-700 bg-white bg-clip-padding border mr-0 border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded-2xl"
							placeholder="youremail@gmail.com"
							name="_replyto"
						/>

						<button
							className="inline-block px-10 py-2  text-black font-medium text-base hover:text-gray-500 hover:text-accent2 bg-accent2 border focus:outline-none focus:ring-0 transition duration-150 ease-in-out rounded-2xl gradientGreen sm:py-3 sm:text-xs md:text-base"
							type="submit">
							<div>Subscribe</div>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
