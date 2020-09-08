import React from 'react';
import { useStateValue } from '../StateProvider';
import './Product.css';

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	console.log(basket);

	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
	};
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<span role='img' aria-label='star'>
								⭐
							</span>
						))}
				</div>
			</div>
			<img src={image} alt={title} />
			<button onClick={addToBasket}>Add to Cart</button>
		</div>
	);
}

export default Product;
