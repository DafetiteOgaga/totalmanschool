import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';

function Index() {
	return (
		<>
			<Header />
			<Outlet context={{}} />
			<Footer />
		</>
	)
}
export { Index }