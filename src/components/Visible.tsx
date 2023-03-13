import { useState } from 'preact/hooks';

export default function Visible() {
	const [count, setCount] = useState(0);
	return (
		<div className='border p-2'>
			<p className='font-bold pt-1 text-gray-600'>{count}</p>
			<button
				onClick={() => setCount(count + 1)}
				className=' rounded-md mt-2 py-2 px-4 bg-green-500	text-white  hover:bg-green-700'
			>
				Increment
			</button>
		</div>
	);
}
