import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
	const {
		products_loading: loading,
		products_error: error,
		featured_products: featured,
	} = useProductsContext();

	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <Error />;
	}
	return (
		<main className="wrapper font-noto my-8">
			<h2 className="sm:text-lg md:text-3xl font-bold sm:pb-2 md:pb-6 text-center">
				Featured Products
			</h2>

			<div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-6 md:mx-10">
				{featured.slice(0, 6).map((product) => {
					return <Product key={product.id} {...product} />;
				})}
			</div>

			<div className="flex justify-center my-6">
				<Link
					to="/products"
					className="bg-black text-white rounded-lg p-2 inline-block shadow-sm hover:bg-accent gap-x-2 hover:text-gray-200 duration-300 transition-all md:text-base sm:text-xs">
					All Products
				</Link>
			</div>
		</main>
	);
};

export default FeaturedProducts;
