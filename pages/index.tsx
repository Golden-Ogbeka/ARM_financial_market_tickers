import type { NextPage } from 'next';
import AppLayout from '../components/layout/AppLayout';
import Hero from '../components/pages/Home/Hero';
import MarketSection from '../components/pages/Home/MarketSection';

const Home: NextPage = () => {
	return (
		<AppLayout>
			<Hero />
			<MarketSection />
		</AppLayout>
	);
};

export default Home;
