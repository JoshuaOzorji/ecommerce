import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
	{
		id: 1,
		text: "Home",
		url: "/",
	},
	{
		id: 2,
		text: "About",
		url: "/about",
	},
	{
		id: 3,
		text: "Products",
		url: "/products",
	},
];

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: "mission",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: "vision",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: "history",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
	},
];

export const questions = [
	{
		id: 1,
		title: "How do I care for my ByteCrafters furniture?",
		content:
			"Remove stains, spills, and dirt as soon as possible by treating with a mild, water-free dry-cleaning solvent. Vacuum to remove dust and dirt. Do not use water.",
	},

	{
		id: 2,
		title: `What type of wood is used in your ByteCrafters furniture?`,
		content: `Our factory handcrafts our ByteCrafters furniture using kiln dried rubberwood or acacia hardwoods.`,
	},

	{
		id: 3,
		title: `What if I need to return my bedroom furniture?`,
		content: `If you aren't completely happy with your Saatva furniture during your 365-night home trial, just give us a call at 1-877-672-2882. We’ll schedule a pick up of your item and issue a refund for the purchase price (taxes included) to your original method of payment.

	  You’ll only pay a $99 processing fee and we’ll take care of the rest!`,
	},

	{
		id: 4,
		title: `What if I need to exchange my bedroom furniture?`,
		content: `If you decide to exchange your furniture for another style during your 365-night home trial, just give us a call at +234-7038-5149. We’ll schedule a pick up of your item and start the exchange process.

	  You’ll only pay a $99 processing fee for your replacement delivery and pickup, and we’ll take care of the rest!`,
	},
];

export const footerLinks = [
	{
		id: 1,
		title: "Company",
		submenu: [{ name: "About Us" }, { name: " Contact" }, { name: "Support" }],
	},

	{
		id: 2,
		title: "Quick Link",
		submenu: [
			{ name: "Orders tracking" },
			{ name: " Size Guide" },
			{ name: "Share Location" },
		],
	},
	{
		id: 3,
		title: "Legal",
		submenu: [{ name: "Terms & Condition" }, { name: "Privacy Policy" }],
	},
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
