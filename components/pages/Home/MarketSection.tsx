import React from 'react';
import MarketImage from '../../../public/icons/stock.png';
import Image from 'next/image';
import Link from 'next/link';

function MarketSection() {
	return (
		<section className={`pl-[5vw] pr-[5vw] pt-[56px] pb-[64px] bg-white`}>
			<div
				className='flex flex-row flex-wrap pt-[65px] pb-[56px] items-center gap-y-24 justify-center gap-40'
				id='market'
			>
				<div className='text-primary flex flex-col lg:items-end sm:items-center '>
					<Image src={MarketImage} alt='Boldo Product' objectFit='contain' />
				</div>
				<div className='text-primary  flex flex-col lg:items-start items-center text-center md:text-left '>
					<h1 className='font-secondary font-normal text-5xl text-primary mb-4'>
						Learn about the Market
					</h1>
					<p className='font-normal text-primary'>
						Have access to Market Stats (time series) filtered by industries and countries
					</p>
					<div className='mt-10 flex flex-row gap-6 items-center flex-wrap justify-center md:justify-between '>
						<Link href='/market'>
							<button className=' bg-secondary   rounded-[56px] flex items-center justify-center h-14 w-52 text-darkBlue font-bold text-xl hover:bg-white '>
								Get Started
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MarketSection;
