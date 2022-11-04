import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/brand/logo.png';
import SearchIcon from '../../../public/icons/entity-search.png';

function Navbar() {
	return (
		<nav className='pl-[5vw] pr-[5vw] pt-5 pb-4 shadow-md bg-blue-900'>
			<div className='flex flex-row flex-wrap items-center'>
				<div className='flex-grow'>
					<Link href='/'>
						<Image src={Logo} alt='Logo' width={50} height={50} className='cursor-pointer' />
					</Link>
				</div>
				<div className='flex flex-row items-center gap-10'>
					<Link href='/finance'>
						<a className='text-white font-secondary'>Finance News</a>
					</Link>
					<Link href='/market'>
						<a className='text-white font-secondary hidden md:block'>Market Stats</a>
					</Link>

					<Link href='/entity-search'>
						<a className='text-white font-secondary'>
							<Image src={SearchIcon} alt='Search' width={24} objectFit='contain' />
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
