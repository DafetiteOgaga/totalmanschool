import { DebugModeComp } from "../hooks/debugSetup/debugToggler";
// import { AppLogo, BadgeOutline } from "./appLogo";
import { SchoolLogo } from "./appLogoRemakeForEmails";

function PageNotFound() {
	return (
		<section className="PageNotFound section page-not-found">
			<h3>Oopsy!</h3>
			<h4>Page not found</h4>
			{/* <div className="container">
				<DebugModeComp />
			</div> */}
			{/* <div className="container">
				<SchoolLogo />
			</div> */}
		</section>
	)
}
export { PageNotFound }