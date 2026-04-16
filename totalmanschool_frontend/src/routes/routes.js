import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute, PublicRoute } from './ProtectedRoute';
import { Index } from '../components/index';
import { Home } from '../components/Home';
import { WhoWeAre } from '../components/whoweare';
import { WhatWeDo } from '../components/whatwedo';
// import { WhyChooseUs } from '../components/whychooseus';
// import { ComingSoon } from '../components/comingsoon';
// import { OtherActivities } from '../components/whoweare';
import { ContactUs } from '../components/contactus';
import { PageNotFound } from '../components/pageNotFound';
// // import { Contact } from '../components/sections/contact';
// import { PageNotFound } from '../components/sections/pageNotFound';
// import { Unauthorized } from '../components/sections/Unauthorised';
// import { Login } from '../components/authentication/login';
// import { SignUp } from '../components/sections/signUp';
// import { Profile } from '../components/sections/profile';
// import { Dashboard } from '../components/sections/dashboard';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Index />}>
				{/* This makes Home the default route */}
				<Route index element={<Home />} />

				{/* every other routes are from Outlet in Index */}
				{/* Protected routes (auth + match check) */}
				{/* <Route element={<ProtectedRoute requireMatch />}>
					<Route path="scramble-questions/:id" element={<ScrambleQuestionsComponent />} />
					<Route path="dashboard/:id/scramble-questions/:scrambleID" element={<ScrambleQuestionsComponent />} />
					<Route path="profile/:id/contribute-questions" element={<ContributeQuestionsComponent />} />
					<Route path="profile/:id" element={<Profile />} />
					<Route path="dashboard/:id" element={<Dashboard />} />
				</Route> */}

				{/* Protected routes (auth only) */}
				{/* <Route element={<ProtectedRoute />}>
					<Route path="profile" element={<Profile />} />
				</Route> */}

				{/* Public routes (login and sign up) */}
				<Route element={<PublicRoute />}>
					<Route path="who-we-are" element={<WhoWeAre />} />
					<Route path="what-we-do" element={<WhatWeDo />} />
					<Route path="contact-us" element={<ContactUs />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Route>
		</Routes>
	);
}

export {AppRoutes};
