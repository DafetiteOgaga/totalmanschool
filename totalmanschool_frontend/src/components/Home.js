import { Banner } from "./banner";
import { Features } from "./fetaures";
import { WhyChooseUs } from "./whychooseus";
import { GraduationAndAnniversary } from "./graduationAndAnniversary";

function Home() {
	return (
		<>
			<Banner />
			<Features />
			<WhyChooseUs />
			<GraduationAndAnniversary />
		</>
	)
}
export { Home };