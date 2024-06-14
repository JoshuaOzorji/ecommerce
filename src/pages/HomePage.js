import React from "react";
import { Contact, Hero, FeaturedProducts, FAQ } from "../components";

const HomePage = () => {
	return (
		<div>
			<Hero />
			<FeaturedProducts />
			<Contact />
			<FAQ />
		</div>
	);
};

export default HomePage;
