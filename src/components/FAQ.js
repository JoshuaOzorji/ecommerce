import React from "react";
import Questions from "../components/Questions";

const FAQ = () => {
	return (
		<section className="flex flex-col items-center wrapper font-noto">
			<div>
				<h3 className="font-bold sm:text-base md:text-2xl my-6 text-center">
					Frequently Asked Questions
				</h3>
				<Questions />
			</div>
		</section>
	);
};

export default FAQ;
