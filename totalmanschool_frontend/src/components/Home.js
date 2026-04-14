import { Banner } from "./banner";
import { Features } from "./fetaures";
import { EducationalServices } from "./educationalservices";
import { ComingSoon } from "./comingsoon";
import { OtherActivities } from "./otheractivities";
import { ContactUs } from "./contactus";

function Home() {
	return (
		<>
			<Banner />
			<Features />
			<EducationalServices />
			<ComingSoon />
			<OtherActivities />
			<ContactUs />
			{/* <p>from home</p> */}
		</>
	)
}
export { Home };