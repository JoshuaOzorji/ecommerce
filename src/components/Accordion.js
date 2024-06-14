import React, { useState, useRef, useEffect } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
	const contentRef = useRef(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (isOpen) {
			setHeight(contentRef.current.scrollHeight);
		} else {
			setHeight(0);
		}
	}, [isOpen]);

	return (
		<div className='border-b border-gray-200'>
			<div
				className='flex justify-between items-center p-4 cursor-pointer bg-gray-100'
				onClick={onClick}>
				<h3 className='text-base md:text-lg font-medium'>{title}</h3>
				<span>{isOpen ? "-" : "+"}</span>
			</div>
			<div
				ref={contentRef}
				className='overflow-hidden transition-height duration-300 ease-in-out'
				style={{ height }}>
				<div className='p-3 bg-white text-sm'>{content}</div>
			</div>
		</div>
	);
};

const Accordion = ({ items }) => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleClick = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className='w-full max-w-md mx-auto mt-10'>
			{items.map((item, index) => (
				<AccordionItem
					key={item.id}
					title={item.title}
					content={item.content}
					isOpen={openIndex === index}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
};

export default Accordion;
