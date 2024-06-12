import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const Product = ({ image, name, price, id }) => {
	return (
		<main className="font-noto grid grid-flow-row w-full">
			<div className="border rounded-lg m-2 group hover:shadow-lg shadow-sm duration-300 transition-all">
				<Link to={`/products/${id}`}>
					<img
						src={image}
						alt={name}
						className="block object-cover sm:w-full sm:h-32 md:w-[100%] md:h-64 opacity-[0.85] hover:opacity-100 rounded-lg cursor-pointer"
					/>
				</Link>

				<footer className="flex items-center justify-between  p-2">
					<h5 className="capitalize-first-letter sm:text-xs md:text-[15px]">
						{name}
					</h5>
					<p className="sm:px-1 md:px-2  sm:text-xs md:text-sm font-bold">
						{formatPrice(price)}
					</p>
				</footer>
			</div>
		</main>
	);
};

export default Product;
