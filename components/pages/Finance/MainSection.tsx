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
import NewsItem from './NewsItem';
import Pagination from '../../reusable/Pagination/pagination';

function MainSection() {
	const dispatch = useDispatch();
	const [industryOptions, setIndustryOptions] = React.useState([]);
	const [page, setPage] = React.useState(1);
	const [totalResults, setTotalResults] = React.useState(0);

	const [newsResults, setNewsResults] = React.useState([]);

	const Formik = useFormik({
		initialValues: {
			countries: [],
			industries: [],
		},
		validationSchema: Yup.object({
			countries: Yup.array().min(1, 'Select at least one country'),
			industries: Yup.array().min(1, 'Select at least one industry'),
		}),

		onSubmit: () => {
			getNews();
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

	const getNews = async () => {
		dispatch(openLoadingIndicator({ text: 'Getting latest news...' }));

		const stringCountries: string = Formik.values.countries
			.map((item: { label: string; value: string }) => item.value)
			.join(',');

		const stringIndustries: string = Formik.values.industries
			.map((item: { label: string; value: string }) => item.value)
			.join(',');

		try {
			const res = await axios.get(
				`https://api.marketaux.com/v1/news/all?countries=${stringCountries}&industries=${stringIndustries}&page=1&api_token=${API_URL}`
			);

			setNewsResults(res.data.data);
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
		dispatch(openLoadingIndicator({ text: 'Getting more news...' }));

		const stringCountries: string = Formik.values.countries
			.map((item: { label: string; value: string }) => item.value)
			.join(',');

		const stringIndustries: string = Formik.values.industries
			.map((item: { label: string; value: string }) => item.value)
			.join(',');

		try {
			const res = await axios.get(
				`https://api.marketaux.com/v1/news/all?countries=${stringCountries}&industries=${stringIndustries}&page=${
					page + 1
				}&api_token=${API_URL}`
			);

			setNewsResults(res.data.data);
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
		dispatch(openLoadingIndicator({ text: 'Getting more news...' }));

		const stringCountries: string = Formik.values.countries
			.map((item: { label: string; value: string }) => item.value)
			.join(',');

		const stringIndustries: string = Formik.values.industries
			.map((item: { label: string; value: string }) => item.value)
			.join(',');

		try {
			const res = await axios.get(
				`https://api.marketaux.com/v1/news/all?countries=${stringCountries}&industries=${stringIndustries}&page=${
					page - 1
				}&api_token=${API_URL}`
			);

			setNewsResults(res.data.data);
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
							Finance news
						</h1>
						<p className='font-normal text-white'>
							Select the filters below and search for the latest financial news
						</p>
					</div>
				</form>
				<div className='flex flex-row justify-center gap-10 md:flex-nowrap flex-wrap'>
					<div className='w-full'>
						<label htmlFor='countries' className='text-white font-secondary text-2xl'>
							Country
						</label>
						<Dropdown
							values={countries}
							id='countries'
							isMulti
							name='countries'
							defaultValue={Formik.values.countries}
							onChange={(e: any) => {
								Formik.setFieldValue('countries', e);
							}}
							onBlur={() => {
								Formik.setFieldTouched('countries', true);
							}}
							containerStyle={{
								marginTop: 10,
							}}
						/>
						<div className='text-sm text-red-300 pt-5'>
							{Formik.touched.countries && Formik.errors.countries && Formik.errors.countries}
						</div>
					</div>
					<div className='w-full'>
						<label htmlFor='industries' className='text-white font-secondary text-2xl'>
							Industry
						</label>
						<Dropdown
							values={industryOptions}
							id='industries'
							isMulti
							name='industries'
							defaultValue={Formik.values.industries}
							onChange={(e: any) => {
								Formik.setFieldValue('industries', e);
							}}
							onBlur={() => {
								Formik.setFieldTouched('industries', true);
							}}
							containerStyle={{
								marginTop: 10,
							}}
						/>
						<div className='text-sm text-red-300 pt-5'>
							{Formik.touched.industries && Formik.errors.industries && Formik.errors.industries}
						</div>
					</div>
				</div>
				<div className='flex justify-center'>
					<button
						className=' bg-secondary mt-10 rounded-[56px] flex items-center justify-center h-14 w-52 text-darkBlue font-bold text-xl hover:bg-white '
						onClick={() => Formik.handleSubmit()}
						type='button'
					>
						Get News
					</button>
				</div>
			</section>
			<section>
				<div className='mt-10 pl-[5vw] pr-[5vw] mb-10'>
					{newsResults.length > 0 ? (
						<>
							<div className='grid md:grid-cols-3 grid-cols-1 gap-5  items-start'>
								{newsResults.map((news: any) => (
									<NewsItem news={news} key={news.uuid} />
								))}
							</div>
							<Pagination
								page={page}
								totalResults={totalResults}
								nextPageChange={nextPage}
								previousPageChange={previousPage}
								limit={3}
							/>
						</>
					) : (
						<p className='text-primary '>No news found. Use the filter to continue searching</p>
					)}
				</div>
			</section>
		</>
	);
}

export default MainSection;
