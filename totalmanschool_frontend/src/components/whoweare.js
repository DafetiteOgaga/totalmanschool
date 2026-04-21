import { useState,  useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import course01 from '../assets/images/courses-01.jpg'
import course02 from '../assets/images/courses-02.jpg'
import course03 from '../assets/images/courses-03.jpg'
import course04 from '../assets/images/courses-04.jpg'
import course05 from '../assets/images/courses-05.jpg'
import { useDevice } from '../context/deviceTypeContext'
import { titleCase } from "../hooks/changeCase"
import { schoolInfo } from "../entry/entry"
import { HangingHeader } from "../feats/feats";

const whoWeAreContent = [
	{
		title: "Our Mission",
		description: `${titleCase(schoolInfo.totalman)} ${titleCase(schoolInfo.school)} is dedicated to providing quality education in a safe, caring, and inspiring environment where every child is encouraged to develop academically, morally, socially, and emotionally.`,
		icon: "bullseye",
		image: course01,
	},
	{
		title: "Our Vision",
		description: `Our vision is to raise confident, responsible, and innovative learners who are equipped with the knowledge, skills, and values needed to excel in an ever-changing world.`,
		icon: "eye",
		image: course02,
	},
	{
		title: "Our Core Values",
		description: `We are guided by strong values such as excellence, integrity, discipline, respect, creativity, teamwork, and a commitment to lifelong learning.`,
		icon: "lightbulb",
		image: course03,
	},
	{
		title: "Who We Are",
		description: `${titleCase(schoolInfo.totalman)} ${titleCase(schoolInfo.school)} is a nurturing and forward-thinking institution committed to helping every student reach their full potential through quality teaching and holistic development.`,
		icon: "school",
		image: course04,
	},
	{
		title: "Our Commitment",
		description: `We are committed to building a supportive school community where students feel valued, parents are actively involved, and teachers are empowered to inspire success.`,
		icon: "hands-helping",
		image: course05,
	},
];

function WhoWeAre() {
	return (
		<section className="WhoWeAre section courses" data-section="section4">
			<div className="container _1000">
				<div className="row">
					<HangingHeader headerText={"Who We Are"} />
					<div className="col-md-12">
						<div
						id='tabs'>
							<section className='tabs-content mt-0'>
								{whoWeAreContent.map((item, idx) => {
									return (
										<article key={idx} className={`tab-state show`}>
											<div className={`row`}>
													<div className="m-auto animate slide-from-top">
														<FontAwesomeIcon icon={item.icon} size="5x" color="#fff" />
													</div>
													<div>
														<h4 className={`m-auto d-flex justify-content-center pt-2 animate slide-from-${idx%2===0?'left':'right'}`}>{item.title}</h4>
														<p className='font-lgr pb-3 animate slide-from-bottom'>
															{item.description}
														</p>
													</div>
											</div>
										</article>
									)
								})}
							</section>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export { WhoWeAre }