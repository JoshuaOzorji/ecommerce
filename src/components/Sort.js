import { useFilterContext } from "../context/filter_context";
import { CiGrid41 } from "react-icons/ci";
import { BsListUl } from "react-icons/bs";

const Sort = () => {
	const {
		filtered_products: products,
		grid_view,
		setGridView,
		setListView,
		sort,
		updateSort,
	} = useFilterContext();

	return (
		<main className='flex justify-between font-noto my-4'>
			<div className='flex gap-x-2 md:gap-x-4 items-center'>
				<div className='flex items-center gap-x-1 md:gap-x-2'>
					<button
						type='button'
						className={`${grid_view ? "active" : null}`}
						onClick={setGridView}>
						<CiGrid41 />
					</button>

					<button
						type='button'
						className={`${!grid_view ? "active" : null}`}
						onClick={setListView}>
						<BsListUl />
					</button>
				</div>

				<p className='text-xs md:text-base'>{products.length} products found</p>
			</div>
			<form>
				<label htmlFor='sort' className='text-xs md:text-base'>
					Sort by{" "}
				</label>
				<select
					name='sort'
					id='sort'
					value={sort}
					onChange={updateSort}
					className='border-transparent text-capitalize text-xs md:text-base'>
					<option value='price-lowest'>(Lowest)</option>
					<option value='price-highest'>(Highest)</option>
					<option value='name-a'>(A-Z)</option>
					<option value='name-z'>(Z-A)</option>
				</select>
			</form>
		</main>
	);
};

export default Sort;
