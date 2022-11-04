import React from 'react';

function NewsItem({ entities }: { entities: any }) {
	return (
		<article className='rounded-2xl w-full shadow-md bg-white p-5'>
			<div className='flex flex-row justify-between border-b-2 mb-5 pb-2 flex-wrap gap-2'>
				<span>Symbol</span>
				<span className='text-gray-700 text-sm'>{entities.symbol}</span>
			</div>
			<div className='flex flex-row justify-between border-b-2 mb-5 pb-2 flex-wrap gap-2'>
				<span>Name</span>
				<span className='text-gray-700 text-sm'>{entities.name}</span>
			</div>
			<div className='flex flex-row justify-between border-b-2 mb-5 pb-2 flex-wrap gap-2'>
				<span>Type</span>
				<span className='text-gray-700 text-sm capitalize'>{entities.type}</span>
			</div>
			<div className='flex flex-row justify-between border-b-2 mb-5 pb-2 flex-wrap gap-2'>
				<span>Industry</span>
				<span className='text-gray-700 text-sm capitalize'>{entities.industry}</span>
			</div>
			<div className='flex flex-row justify-between border-b-2 mb-5 pb-2 flex-wrap gap-2'>
				<span>Exchange</span>
				<span className='text-gray-700 text-sm'>{entities.exchange}</span>
			</div>
			<div className='flex flex-row justify-between border-b-2 mb-5 pb-2 flex-wrap gap-2'>
				<span>Exchange description</span>
				<span className='text-gray-700 text-sm'>{entities.exchange_long}</span>
			</div>
			<div className='flex flex-row justify-between border-b-2 mb-5 pb-2 flex-wrap gap-2'>
				<span>Country</span>
				<span className='text-gray-700 text-sm uppercase'>{entities.country}</span>
			</div>
		</article>
	);
}

export default NewsItem;
