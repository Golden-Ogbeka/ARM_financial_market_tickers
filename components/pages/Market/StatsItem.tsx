import Image from 'next/image';
import React from 'react';
import StockImage from '../../../public/icons/stock.png';
import FileImage from '../../../public/icons/file.png';
import GraphImage from '../../../public/icons/average.png';

function NewsItem({ stats }: { stats: any }) {
	return (
		<article className='rounded-2xl w-full shadow-md bg-white p-5'>
			<p className='text-2xl font-secondary'>
				{new Date(stats.published_at).toDateString()}
			</p>

			{stats.data.map((item: any, index: number) => (
				<div className='flex flex-row justify-between border-b-2 mb-5' key={index}>
					<div className='flex items-center gap-3'>
						<Image src={StockImage} alt='Stock' width={20} />
						<span className='text-gray-700'>{item.key}</span>
					</div>
					<div className='flex items-center gap-3'>
						<Image src={FileImage} alt='Stock' width={20} />
						<span className='text-gray-700'>{item.total_documents}</span>
					</div>
					<div className='flex items-center gap-3'>
						<Image src={GraphImage} alt='Stock' width={20} />
						<span className='text-gray-700'>{item.sentiment_avg.toFixed(2)}</span>
					</div>
				</div>
			))}
		</article>
	);
}

export default NewsItem;
