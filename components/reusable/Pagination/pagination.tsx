import React from 'react';

export default function Pagination({
	totalResults,
	onPageChange,
	page,
	limit = 3,
}: {
	totalResults: number;
	onPageChange: (num: number) => void;
	page: number;
	limit: number;
}) {
	const totalPages = totalResults / limit;

	const pages = Array(totalPages)
		.keys()
		.map((num) => num + 1);

	return (
		<nav aria-label='Page navigation'>
			<ul className='pagination justify-content-center mt-20'>
				{pages.map((num: number) => (
					<li className='page-item' onClick={() => onPageChange(num)} key={num}>
						<button
							type='button'
							className={`btn ${page === num ? 'btn-danger' : 'btn-light'}`}
						>
							{num}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
