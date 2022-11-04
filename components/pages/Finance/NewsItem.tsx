import Image from 'next/image';
import React from 'react';

function NewsItem({ news }: { news: any }) {
	return (
		<article
			className='rounded-2xl w-full shadow-md bg-white cursor-pointer'
			onClick={() => window.open(news.url)}
		>
			<picture>
				<source src={news.image_url || ''} />
				<img
					src={news.image_url || ''}
					alt='News Image'
					className='object-contain h-60 w-full'
				/>
			</picture>

			<div className='flex flex-col gap-5 p-5'>
				<p className='text-2xl font-secondary'>{news.title}</p>
				<p className='text-sm text-gray-700'>{news.description}</p>
				<p>{news.snippet}</p>
				<p className='self-end tex-sm italic text-gray-700'>
					{new Date(news.published_at).toDateString()}
				</p>
			</div>
		</article>
	);
}

export default NewsItem;
