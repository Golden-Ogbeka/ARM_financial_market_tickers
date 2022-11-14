import React from 'react';
import HeroImage from '../../../public/icons/budget.png';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
	return (
		<section className={`pl-[5vw] pr-[5vw] pt-[56px] pb-[64px] bg-blue-900`}>
			<div
				className='flex flex-row flex-wrap pt-[65px] pb-[56px] items-center gap-y-24 gap-x-5'
				id='finance'
			>
				<div className='text-white md:flex-[40%] sm:flex-[100%] flex flex-col lg:items-start items-center text-center md:text-left'>
					<h1 className='font-secondary font-normal text-5xl text-white mb-4'>
						Finance news at your fingertips
					</h1>
					<p className='font-normal text-white'>
						Get access to Finance &amp; Market News endpoint to get finance news filtered by
						countries and industries
					</p>
					<div className='mt-10 flex flex-row gap-6 items-center flex-wrap justify-center md:justify-between '>
						<Link href='/finance'>
							<button className=' bg-secondary   rounded-[56px] flex items-center justify-center h-14 w-52 text-darkBlue font-bold text-xl hover:bg-white '>
								Get Started
							</button>
						</Link>
					</div>
				</div>
				<div className='text-white md:flex-[55%] sm:flex-[100%] flex flex-col lg:items-end sm:items-center'>
					<Image src={HeroImage} alt='Finance' objectFit='contain' />
				</div>
			</div>
		</section>
	);
}

export default Hero;
