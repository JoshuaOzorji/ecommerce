import React from "react";
import Accordion from "./Accordion";
import { questions } from "../utils/constants";

const FAQ = () => {
	return (
		<main className='wrapper font-noto border-t'>
			<h3 className='font-bold text-lg md:text-2xl my-4 text-center'>
				Frequently Asked Questions
			</h3>
			<div>
				<Accordion items={questions} />
			</div>
		</main>
	);
};

export default FAQ;
