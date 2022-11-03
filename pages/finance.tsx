import { NextPage } from 'next';
import AppLayout from '../components/layout/AppLayout';
import MainSection from '../components/pages/Finance/MainSection';

const Finance: NextPage = () => {
	return (
		<AppLayout>
			<MainSection />
		</AppLayout>
	);
};

export default Finance;
