import { DebugModeComp } from "../hooks/debugSetup/debugToggler";
import { AppLogo } from "./appLogo";

function PageNotFound() {
	return (
		<section className="ComingSoon section coming-soon" data-section="section3">
			<div className="container">
				<DebugModeComp />
			</div>
			<div className="container"
			style={{paddingTop: 80}}>
				<AppLogo />
			</div>
		</section>
	)
}
export { PageNotFound }