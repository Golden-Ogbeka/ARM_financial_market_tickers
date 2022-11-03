import Image from 'next/image';
import React from 'react';

function NewsItem({ news }: { news: any }) {
	return (
		<article
			className='rounded-2xl w-full shadow-sm bg-white cursor-pointer'
			onClick={() => window.open(news.url)}
		>
			<Image
				src={news.image_url}
				alt='News Image'
				height={200}
				className='object-cover'
				layout='fill'
			/>
			<div className='flex flex-col gap-5'>
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
