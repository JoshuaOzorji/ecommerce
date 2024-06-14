import { useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
	const [main, setMain] = useState(images[0]);
	return (
		<main className='grid place-items-center'>
			<img
				src={main.url}
				alt='main product'
				className='md:w-[90%] md:h-[25rem] h-[20rem] w-[80%] rounded-lg'
			/>
			<div className='w-[80%] md:w-[90%] grid grid-cols-5 gap-x-4 mt-2'>
				{images.map((image, index) => {
					return (
						<img
							src={image.url}
							alt={image.filename}
							key={index}
							onClick={() => setMain(images[index])}
							className={`${
								image.url === main.url ? "opacity-50 rounded-lg " : null
							} h-[45px] md:h-[75px] rounded-lg shadow-lg`}
						/>
					);
				})}
			</div>
		</main>
	);
};

export default ProductImages;
