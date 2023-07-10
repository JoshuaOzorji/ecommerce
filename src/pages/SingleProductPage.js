import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
	Loading,
	Error,
	ProductImages,
	AddToCart,
	Stars,
	PageHero,
} from "../components";

const SingleProductPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const {
		single_product_loading: loading,
		single_product_error: error,
		single_product: product,
		fetchSingleProduct,
	} = useProductsContext();

	useEffect(() => {
		fetchSingleProduct(`${url}${id}`);
		//eslint-disable-next-line
	}, [id]);

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				navigate("/");
			}, 3000);
		}
	});

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error />;
	}

	const { name, price, description, stock, stars, reviews, company, images } =
		product;

	return (
		<main className="font-noto">
			<div className="gradientGreen wrapper py-1 capitalize-first-letter">
				<PageHero title={name} product />
			</div>
			<section className="wrapper mt-8">
				<div className="flex sm:flex-col md:flex-row">
					<div className="md:w-1/2">
						<ProductImages images={images} />
					</div>

					<section className="text-gray-900 md:pl-6  bg-[#fdfdfd] md:p-8 rounded-lg md:w-1/2 px-4 md:mt-0 sm:mt-4 sm:py-6">
						<p className="flex sm:text-[12px] md:text-xs">
							<span className="text-gray-500">Brand: </span>
							<p className="capitalize-first-letter pl-[3px]">{company}</p>
						</p>
						<div className="flex items-center text-center justify-between sm:text-[14px] md:text-[16px] md:py:2">
							<h2 className="capitalize-first-letter font-bold">{name}</h2>

							<h5 className="font-bold md:flex">{formatPrice(price)}</h5>
						</div>

						<Stars stars={stars} reviews={reviews} />

						<p className="my-5 sm:text-[12px] md:text-sm">{description}</p>
						<p className="md:text-sm sm:text-[12px]">
							<span className="text-gray-500">Available: </span>
							{stock > 0 ? "In stock" : "Out of stock"}
						</p>

						<div className="flex items-center">
							{stock > 0 && <AddToCart product={product} />}
						</div>
					</section>
				</div>
			</section>
		</main>
	);
};

export default SingleProductPage;
