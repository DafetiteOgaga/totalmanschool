import { useState,  useEffect, useRef } from "react"
import course01 from '../assets/images/courses-01.jpg'
import course02 from '../assets/images/courses-02.jpg'
import course03 from '../assets/images/courses-03.jpg'
import course04 from '../assets/images/courses-04.jpg'
import course05 from '../assets/images/courses-05.jpg'
import { Link } from 'react-router-dom';
import { useDevice } from '../context/deviceTypeContext'
import { titleCase } from "../hooks/changeCase"
import { schoolInfo } from "../entry/entry"
import { HangingHeader } from "../feats/feats"

const whatWeDoContent = [
	{
		title: "Academic Excellence",
		description: `${titleCase(schoolInfo.totalman)} ${titleCase(schoolInfo.school)} is committed to delivering high academic standards through a well-structured curriculum, qualified educators, and continuous student assessment to ensure outstanding performance.`,
		image: course01
	},
	{
		title: "Academic Programmes",
		description: "We provide a well-rounded academic curriculum that equips students with strong foundations in literacy, numeracy, science, and critical thinking.",
		image: course02
	},
	{
		title: "Nursery & Primary Education",
		description: "Our nursery and primary sections offer age-appropriate learning experiences that help children grow academically, socially, and emotionally.",
		image: course03
	},
	{
		title: "Digital Learning",
		description: "We integrate modern technology into teaching and learning to prepare students for a rapidly changing digital world.",
		image: course04
	},
	{
		title: "Student Development",
		description: "We help students grow into confident, responsible, and disciplined individuals through leadership opportunities, mentorship, and character-building programmes.",
		image: course05
	},
	{
		title: "Leadership Development",
		description: "Through prefectship roles, group projects, and student-led activities, we help students develop leadership and responsibility.",
		image: course01
	},
	{
		title: "Guidance & Mentorship",
		description: "We support students through mentorship and guidance programmes that help them make good decisions and build confidence.",
		image: course02
	},
	{
		title: "Community Service",
		description: "Students participate in outreach and community service projects that encourage compassion, teamwork, and social responsibility.",
		image: course03
	},
	{
		title: "Enrichment Activities",
		description: "We provide a variety of activities beyond the classroom that help students discover their talents, creativity, and practical skills.",
		image: course04
	},
	{
		title: "STEM & ICT Training",
		description: "Students are introduced to science, technology, engineering, mathematics, and practical computer skills through engaging hands-on lessons.",
		image: course05
	},
	{
		title: "Creative Arts Programme",
		description: "Our creative arts programme encourages students to express themselves through music, dance, drama, drawing, and other artistic activities.",
		image: course01
	},
	{
		title: "Educational Excursions",
		description: "We organize excursions and field trips that give students practical exposure and connect classroom learning with real-life experiences.",
		image: course02
	},
	{
		title: "School Life",
		description: "We create a vibrant and supportive school environment through competitions, events, and strong collaboration with parents.",
		image: course03
	},
	{
		title: "Competitions & Events",
		description: "We prepare students for academic, sporting, and cultural competitions while also hosting memorable school events and celebrations.",
		image: course04
	},
	{
		title: "Parent Partnership",
		description: "We work closely with parents through regular communication, meetings, and school activities to support every child’s success.",
		image: course05
	},
];
function WhatWeDo() {
	const [activeTab, setActiveTab] = useState(0)
	const TOTAL_TABS = whatWeDoContent.length-1;
	const intervalRef = useRef(null);

	const resetInterval = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setActiveTab(prev => prev === TOTAL_TABS ? 0 : prev + 1);
		}, 5000); // 30 seconds
	};

	useEffect(() => {
		resetInterval();
		return () => clearInterval(intervalRef.current);
	}, []);
	return (
		<section className="WhatWeDo section courses what-we-do" data-section="section4">
			<div className="container-fluid">
				<div className="row">
					<HangingHeader headerText={"What We Do"} />
					<div className="col-md-12">
						<div
						id='tabs'>
							<section className='tabs-content mt-0'>
								<article className={`tab-state show`}>
									<div className="row">
										<div className="col-md-6">
											<img className="b-rad-10px"
											src={whatWeDoContent[activeTab].image} alt="" />
										</div>
										<div className="col-md-6">
										<h4>{whatWeDoContent[activeTab].title}</h4>
										<p className='font-lgr'>
											{whatWeDoContent[activeTab].description}
										</p>
										</div>
									</div>
								</article>
							</section>
							<ul className="dflex">
								{whatWeDoContent.map((_, idx) => {
									return (
										<li key={idx} className={`${activeTab===idx?'ui-tabs-active':''}`}>
											<Link className="pad" onClick={()=>setActiveTab(idx)}>
											</Link>
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export { WhatWeDo }