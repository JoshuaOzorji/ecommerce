import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
	return (
		<main>
			<div className='font-noto text-accent'>
				<h5 className='tracking-wider text-xs md:text-base'>
					<Link to='/'>Home </Link>
					{">"} {product && <Link to='/products'>Products {">"}</Link>}
					{title}
				</h5>
			</div>
		</main>
	);
};

export default PageHero;
