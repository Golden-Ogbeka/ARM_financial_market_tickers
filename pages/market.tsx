import { NextPage } from 'next';
import AppLayout from '../components/layout/AppLayout';
import MainSection from '../components/pages/Market/MainSection';

const Market: NextPage = () => {
	return (
		<AppLayout>
			<MainSection />
		</AppLayout>
	);
};

export default Market;
