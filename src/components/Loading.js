import { SpinnerCircularFixed } from "spinners-react";

const Loading = () => {
	return (
		<div className='flex justify-center h-full'>
			<SpinnerCircularFixed color='#000000' />
		</div>
	);
};

export default Loading;
