import React from 'react';
import Dropdown from '../../reusable/Dropdown/Dropdown';
import axios from 'axios';
import { API_URL } from '../../../functions/env';
import { countries } from '../../../data/countries';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { closeAlert, openAlert } from '../../../store/slices/alertSlice';
import { useDispatch } from 'react-redux';
import {
	closeLoadingIndicator,
	openLoadingIndicator,
} from '../../../store/slices/loadingIndicator';
import EntityItem from './EntityItem';
import Pagination from '../../reusable/Pagination/pagination';

function MainSection() {
	const dispatch = useDispatch();
	const [industryOptions, setIndustryOptions] = React.useState([]);
	const [page, setPage] = React.useState(1);
	const [totalResults, setTotalResults] = React.useState(0);

	const [entitiesResults, setEntityResults] = React.useState([]);

	const Formik = useFormik({
		initialValues: {
			search: '',
		},
		validationSchema: Yup.object({
			search: Yup.string().required('Search entity is required'),
		}),

		onSubmit: () => {
			getEntity();
		},
		enableReinitialize: true,
	});

	React.useEffect(() => {
		const getIndustries = async () => {
			try {
				const res = await axios.get(
					`https://api.marketaux.com/v1/entity/industry/list?api_token=${API_URL}`
				);
				const industries = res.data?.data;

				setIndustryOptions(industries.map((item: string) => ({ label: item, value: item })));
			} catch (error: any) {
				dispatch(
					openAlert({
						message: error?.response?.data?.error?.code || 'Request failed',
						type: 'error',
					})
				);
				// close alert
				setTimeout(() => {
					dispatch(closeAlert());
				}, 5000);
			}
		};

		getIndustries();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getEntity = async () => {
		dispatch(openLoadingIndicator({ text: 'Getting entities...' }));

		try {
			const res = await axios.get(
				`https://api.marketaux.com/v1/entity/search?search=${Formik.values.search}&page=1&api_token=${API_URL}`
			);

			setEntityResults(res.data.data);
			setTotalResults(res.data.meta.found);
		} catch (error: any) {
			openAlert({
				message: error?.response?.data?.error?.message || 'Request failed',
				type: 'error',
			});
			// close alert
			setTimeout(() => {
				dispatch(closeAlert());
			}, 5000);
		}
		dispatch(closeLoadingIndicator());
	};

	const nextPage = async () => {
		setPage(page + 1);
		dispatch(openLoadingIndicator({ text: 'Getting more entities...' }));

		try {
			const res = await axios.get(
				`https://api.marketaux.com/v1/entity/search?search=${Formik.values.search}&page=${
					page + 1
				}&api_token=${API_URL}`
			);

			setEntityResults(res.data.data);
			setTotalResults(res.data.meta.found);
		} catch (error: any) {
			openAlert({
				message: error?.response?.data?.error?.message || 'Request failed',
				type: 'error',
			});
			// close alert
			setTimeout(() => {
				dispatch(closeAlert());
			}, 5000);
		}
		dispatch(closeLoadingIndicator());
	};
	const previousPage = async () => {
		setPage(page - 1);
		dispatch(openLoadingIndicator({ text: 'Getting more entities...' }));

		try {
			const res = await axios.get(
				`https://api.marketaux.com/v1/entity/search?search=${Formik.values.search}&page=${
					page - 1
				}&api_token=${API_URL}`
			);

			openAlert({
				message: 'Search successful',
				type: 'success',
			});

			setEntityResults(res.data.data);
			setTotalResults(res.data.meta.found);
		} catch (error: any) {
			openAlert({
				message: error?.response?.data?.error?.message || 'Request failed',
				type: 'error',
			});
			// close alert
			setTimeout(() => {
				dispatch(closeAlert());
			}, 5000);
		}
		dispatch(closeLoadingIndicator());
	};
	return (
		<>
			<section className={`pl-[5vw] pr-[5vw] pt-[56px] pb-[64px] bg-blue-900`}>
				<form
					className='flex flex-row flex-wrap pt-[65px] pb-[56px] justify-center  text-center'
					id='finance'
				>
					<div className='text-white flex flex-col items-center'>
						<h1 className='font-secondary font-normal text-5xl text-white mb-4'>
							Entity Search
						</h1>
						<p className='font-normal text-white'>
							Select the filters below and search for all entities supported
						</p>
					</div>
				</form>
				<div className='flex flex-row justify-center gap-10 md:flex-nowrap flex-wrap'>
					<div className='w-full'>
						<label htmlFor='search' className='text-white font-secondary text-2xl'>
							Entity
						</label>
						<input
							type='text'
							className='mt-[10px] border-[1px] border-[#BDBDBD] rounded-[5px] dark:bg-lightDark dark:border-lightDark p-[13px] pl-4 pr-4 font-normal leading-[189.34%] dark:text-white w-full'
							id='search'
							required
							name='search'
							onBlur={Formik.handleBlur}
							onChange={Formik.handleChange}
							placeholder='e.g. tsla'
						/>

						<div className='text-sm text-red-300 pt-5'>
							{Formik.touched.search && Formik.errors.search && Formik.errors.search}
						</div>
					</div>
				</div>
				<div className='flex justify-center'>
					<button
						className=' bg-secondary mt-10 rounded-[56px] flex items-center justify-center h-14 w-52 text-darkBlue font-bold text-xl hover:bg-white '
						onClick={() => Formik.handleSubmit()}
						type='button'
					>
						Get Entity
					</button>
				</div>
			</section>
			<section>
				<div className='mt-10 pl-[5vw] pr-[5vw] mb-10'>
					{entitiesResults.length > 0 ? (
						<>
							<div className='grid md:grid-cols-3 grid-cols-1 gap-5  items-start'>
								{entitiesResults.map((entities: any) => (
									<EntityItem entities={entities} key={entities.uuid} />
								))}
							</div>
							<Pagination
								page={page}
								totalResults={totalResults}
								nextPageChange={nextPage}
								previousPageChange={previousPage}
								limit={50}
							/>
						</>
					) : (
						<p className='text-primary '>
							No entity found. Use the filter to continue searching
						</p>
					)}
				</div>
			</section>
		</>
	);
}

export default MainSection;
