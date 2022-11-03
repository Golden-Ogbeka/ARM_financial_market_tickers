import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Alert from '../reusable/Alert/Alert';
import LoadingIndicator from '../reusable/LoadingIndicator/LoadingIndicator';

function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main className='min-h-screen'>
				<Alert />
				<LoadingIndicator />
				{children}
			</main>
			<Footer />
		</>
	);
}

export default AppLayout;
