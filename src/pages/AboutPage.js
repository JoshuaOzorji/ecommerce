import React from "react";
import PageHero from "../components/PageHero";
import aboutImg from "../assets/img/about-home.jpg";
const AboutPage = () => {
	return (
		<main className='font-noto '>
			<div className='gradientGreen wrapper py-1'>
				<PageHero title='About' />
			</div>

			<section className='wrapper flex flex-col md:flex-row gap-x-12 items-center md:pt-10'>
				<div className='md:w-1/2 order-last md:order-first'>
					<h1 className='font-bold text-2xl md:text-4xl pb-2 md:pb-4'>
						About Us
					</h1>
					<p className='md:leading-8 leading-6 text-sm md:text-lg'>
						ByteCrafters is the ultimate destination for all your furniture
						needs. We are dedicated to providing you with exceptional products
						and unmatched customer service. With a wide range of high-quality
						furniture pieces, we aim to help you create the perfect living
						spaces that reflect your unique style.
						<br />
						Our commitment to quality sets us apart, as we work closely with
						reputable manufacturers and designers to curate a diverse selection
						of furniture crafted with precision and durability. Whether you're
						furnishing a new home or seeking inspiration for a complete
						makeover, our knowledgeable sales associates are here to assist you
						in finding the perfect pieces that meet your specific requirements.
						With competitive prices, special promotions, and financing options,
						we strive to make great furniture accessible to everyone. Your
						satisfaction is our top priority, and we look forward to helping you
						transform your space into a haven of style and comfort.
					</p>
				</div>
				<div className='md:w-1/2 order-first md:order-last'>
					<img
						src={aboutImg}
						alt='about-home'
						className='rounded-lg md:shadow-xl mt-6 mb-3 md:mb-0 md:mt-0'
					/>
				</div>
			</section>
		</main>
	);
};

export default AboutPage;
