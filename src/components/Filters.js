import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
	const {
		filters: {
			text,
			category,
			company,
			color,
			min_price,
			price,
			max_price,
			shipping,
		},
		updateFilters,
		clearFilters,
		all_products,
	} = useFilterContext();

	const categories = getUniqueValues(all_products, "category");
	const companies = getUniqueValues(all_products, "company");
	const colors = getUniqueValues(all_products, "colors");

	return (
		<main className='h-full'>
			<section className='md:sticky top-0 font-noto text-xs md:text-sm border-b pb-2'>
				<form onSubmit={(e) => e.preventDefault()}>
					{/* search input */}
					<div className='py-2'>
						<input
							type='text'
							name='text'
							placeholder='search'
							className='p-1 rounded-lg border focus:border-0'
							value={text}
							onChange={updateFilters}
						/>
					</div>

					{/* categories */}
					<div className='mb-2'>
						<h5 className='filter-h5'>category</h5>
						<div>
							{categories.map((c, index) => {
								return (
									<button
										key={index}
										onClick={updateFilters}
										type='button'
										name='category'
										className={`${
											category === c.toLowerCase() ? "filter-active " : null
										}`}>
										<p className='pr-2 capitalize-first-letter block'>{c}</p>
									</button>
								);
							})}
						</div>
					</div>

					{/* companies */}
					<div className='mb-2'>
						<h5 className='filter-h5'>company</h5>
						<select
							name='company'
							value={company}
							onChange={updateFilters}
							className=''>
							{companies.map((c, index) => {
								return (
									<option key={index} value={c}>
										{c}
									</option>
								);
							})}
						</select>
					</div>

					{/* colors */}
					<div className='mb-2'>
						<h5 className='filter-h5'>colors</h5>
						<div className='flex items-center gap-x-1'>
							{colors.map((c, index) => {
								if (c === "all") {
									return (
										<button
											key={index}
											name='color'
											onClick={updateFilters}
											data-color='all'
											className={`${
												color === "all" ? "all-btn products-active" : "all-btn"
											}`}>
											all
										</button>
									);
								}
								return (
									<button
										key={index}
										name='color'
										style={{ background: c }}
										className={`${
											color === c ? "color-btn products-active" : "color-btn"
										}`}
										data-color={c}
										onClick={updateFilters}>
										{color === c ? <FaCheck className='text-white' /> : null}
									</button>
								);
							})}
						</div>
					</div>

					{/* price */}
					<div className=''>
						<h5 className='filter-h5'>price</h5>
						<p>{formatPrice(price)}</p>
						<input
							type='range'
							name='price'
							min={min_price}
							max={max_price}
							onChange={updateFilters}
							value={price}
						/>
					</div>

					{/* shipping */}
					<div className='flex items-center gap-x-1 mb-2'>
						<label htmlFor='shipping' className='capitalize-first-letter'>
							free shipping
						</label>
						<input
							type='checkbox'
							name='shipping'
							id='shipping'
							onChange={updateFilters}
							checked={shipping}
						/>
					</div>
				</form>

				{/* clear filters */}
				<div className='pt-2'>
					<button
						type='button'
						onClick={clearFilters}
						className='capitalize-first-letter bg-red-600 text-white py-1 px-2 rounded-lg'>
						clear filters
					</button>
				</div>
			</section>
		</main>
	);
};

export default Filters;
