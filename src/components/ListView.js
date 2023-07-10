import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
	return (
		<main className="font-noto items-center flex flex-col">
			{products.map((product) => {
				const { id, image, name, price, description } = product;
				return (
					<article
						key={id}
						className="flex flex-row items-center md:gap-y-2 mb-6 border-b sm:gap-x-4 md:gap-x-6 pb-2">
						<div className="">
							<img
								src={image}
								alt={name}
								className="sm:w-[6.25rem] sm:h-[4.37rem] md:w-[14rem] md:h-[8rem] object-cover rounded-lg shadow-lg w-[25%]"
							/>
						</div>
						<div className="w-[75%]">
							<div className="md:hidden sm:flex justify-between">
								<h4 className="capitalize-first-letter font-bold text-[12px]">
									{name}
								</h4>
								<h5 className="text-[12px]  font-bold">{formatPrice(price)}</h5>
							</div>

							<div className="md:flex flex-col sm:hidden">
								<h4 className="capitalize-first-letter font-bold text-lg">
									{name}
								</h4>
								<h5 className="text-base font-bold">{formatPrice(price)}</h5>
							</div>

							<p className="sm:text-[10px] md:text-sm md:pb-4 md:pr-28">
								{description.substring(0, 150)}...
							</p>
							<Link
								to={`/products/${id}`}
								className=" hover:underline sm:text-xs md:text-sm">
								View details
							</Link>
						</div>
					</article>
				);
			})}
		</main>
	);
};

export default ListView;
