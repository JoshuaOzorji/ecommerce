// import { Fragment, useState } from "react";
// import {
// 	Accordion,
// 	AccordionHeader,
// 	AccordionBody,
// } from "@material-tailwind/react";
// import { questions } from "../utils/constants";
// import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

// export default function Questions() {
// 	const [open, setOpen] = useState(null);

// 	const handleOpen = (id) => {
// 		setOpen(open === id ? null : id);
// 	};

// 	return (
// 		<div className='max-w-3xl sm:px-10'>
// 			<Fragment>
// 				{questions.map((question) => (
// 					<Accordion key={question.id} open={open === question.id}>
// 						<AccordionHeader
// 							onClick={() => handleOpen(question.id)}
// 							className='w-full flex items-center sm:text-sm md:text-base font-noto'>
// 							<span className='flex-grow'>{question.title}</span>
// 							{open === question.id ? (
// 								<MdKeyboardArrowUp />
// 							) : (
// 								<MdKeyboardArrowDown />
// 							)}
// 						</AccordionHeader>
// 						<AccordionBody className='gradientGreen sm:pl-2 sm:pr-10 md:pl-4 md:pr-24 font-noto text-black sm:text-xs md:text-sm sm:leading-5'>
// 							{question.content}
// 						</AccordionBody>
// 					</Accordion>
// 				))}
// 			</Fragment>
// 		</div>
// 	);
// }

import React from "react";

const Questions = () => {
	return <div>Questions</div>;
};

export default Questions;
