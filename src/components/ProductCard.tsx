import { useState } from 'preact/hooks';
import { IProduct } from '../types';

interface ProductCardProps {
	product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
	const [details, setDetails] = useState(false);
	const toggle = () => setDetails(prev => !prev);

	return (
		<div className='border rounded mb-2 p-3'>
			<h2 className='text-lg font-bold'>{product.title}</h2>
			<p className='font-bold pt-1 text-gray-600'>${product.price}</p>
			<div>
				<a className='text-lg font-bold hover:text-sky-600' href={`/product/${product.id}`}>
					Open product
				</a>
			</div>
			<button
				onClick={toggle}
				className=' rounded-md mt-2 py-2 px-4 bg-sky-400	text-white  hover:bg-sky-500'
			>
				Toggle Description
			</button>
			{details && <p className='text-lg pt-2'>{product.description}</p>}
		</div>
	);
}
