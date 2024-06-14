import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<main className='gradientGreen'>
			<div className='wrapper font-noto h-full flex flex-col gap-y-4 py-12 text-center'>
				<p className='text-[7rem] md:text-[10rem] font-bold'>404</p>
				<h1 className='text-2xl md:text-3xl font-bold'>Opps! Page not found</h1>

				<button className=''>
					<Link
						to='/'
						className='border inline-block bg-black text-white px-3 py-1 rounded-lg text-xs md:text-lg hover:bg-accent'>
						Back Home
					</Link>
				</button>
			</div>
		</main>
	);
};

export default ErrorPage;
