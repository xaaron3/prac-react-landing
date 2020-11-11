import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards () {
	return (
		<div className='cards'>
			<h1>Check Out These Places</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='images/img-9.jpg'
							text='Explore these areas in the Amazon rainforest!'
							label='Adventure'
							path='/services'
						/>
						<CardItem
							src='images/img-2.jpg'
							text='Travel through the Bali islands in Indonesia'
							label='Luxury'
							path='/services'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='images/img-4.jpg'
							text='Check out this island with a soccer field'
							label='Fun'
							path='/services'
						/>
						<CardItem src='images/img-1.jpg' text='Climb these mountains' label='Hiking' path='/services' />
						<CardItem
							src='images/img-3.jpg'
							text='Venture into the deep ocean'
							label='Mystery'
							path='/services'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
