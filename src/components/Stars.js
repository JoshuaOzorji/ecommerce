import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
	const tempStars = Array.from({ length: 5 }, (_, index) => {
		const number = index + 0.5;
		return (
			<span key={index}>
				{stars >= index + 1 ? (
					<BsStarFill />
				) : stars >= number ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
		);
	});
	return (
		<main className="flex items-center gap-x-2 text-sm">
			<div className="flex text-[#FFD700]">{tempStars}</div>
			<p className="text-gray-700 ">{stars}</p>
		</main>
	);
};

export default Stars;
