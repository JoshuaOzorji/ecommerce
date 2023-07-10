import { BsArrowRightShort } from "react-icons/bs";
import heroBg from "../assets/img/hero1.jpg";
const Hero = () => {
	return (
		<section className="gradientGreen wrapper h-full w-full">
			<div className="flex">
				<div className="sm:w-[90%] md:w-3/5 font-noto py-14 sm:px-2 md:px-6">
					<h1 className="sm:text-4xl md:text-6xl font-bold leading-tight mb-6 sm:mr-0 md:mr-16">
						Design your home with our collection.
					</h1>
					<p className="sm:text-[13px] md:text-sm font-light mb-6 sm:mr-0 md:mr-16">
						Explore our collection of currated design accessories to add to your
						home and create a space you love
					</p>
					<button className="flex items-center bg-black text-white font-bold rounded-lg py-2 px-3 btn-hover">
						<p className="sm:text-xs">Explore</p>
						<BsArrowRightShort />
					</button>
				</div>

				{/* Right hero */}
				<div className="sm:hidden md:flex md:w-2/5 md:py-6 ">
					<img
						src={heroBg}
						alt="hero"
						className="rounded-lg shadow-2xl border-[10px] border-white"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
