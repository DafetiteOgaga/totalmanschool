import { useState, useEffect,useRef } from "react"
import { Link } from 'react-router-dom';
import chooseUs01 from '../assets/images/choose-us-image-01.png'
import chooseUs02 from '../assets/images/choose-us-image-02.png'
import chooseUs03 from '../assets/images/choose-us-image-03.png'
import { schoolInfo } from "../entry/entry";
import { titleCase } from "../hooks/changeCase";
import { HangingHeader } from "../feats/feats";

const whyChooseUsArr = [
	{
		image: chooseUs01,
		title: "Academic Excellence",
		para: `${titleCase(schoolInfo.totalman)} ${titleCase(schoolInfo.school)} is committed to delivering high academic standards through a well-structured curriculum, qualified educators, and continuous student assessment to ensure outstanding performance.`
	},
	{
		image: chooseUs02,
		title: "Experienced Teachers",
		para: "Our dedicated and highly qualified teachers bring years of experience in education, ensuring that students receive proper guidance, mentorship, and support to reach their full potential."
	},
	{
		image: chooseUs03,
		title: "Modern Learning Environment",
		para: "We provide a safe, supportive, and technology-enhanced learning environment that encourages creativity, critical thinking, and active student participation."
	}
]
function WhyChooseUs() {
	const [activeTab, setActiveTab] = useState(0)
	const TOTAL_TABS = whyChooseUsArr.length-1;
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
		<section className="WhyChooseUs section why-us" data-section="section2">
			<div className="container _1300">
				<div className="row">
					<HangingHeader headerText={`Why ${titleCase(schoolInfo.totalman)} ${titleCase(schoolInfo.school)}?`} />
					<div className="col-md-12">
						<div id='tabs'>
							<ul>
								{whyChooseUsArr.map((item, idx)=> {
									return (
										<li key={idx} className={`${activeTab===idx?'ui-tabs-active':''}`}>
											<Link onClick={()=>setActiveTab(idx)}>
												{item.title}
											</Link>
										</li>
									)
								})}
							</ul>
							<section className='tabs-content'>
								<article className={`tab-state show'}`}>
									<div className="row">
										<div className="col-md-6">
											<img src={whyChooseUsArr[activeTab].image} alt="" />
										</div>
										<div className="col-md-6">
										<h4>{whyChooseUsArr[activeTab].title}</h4>
										<p className='font-lgr'>
											{whyChooseUsArr[activeTab].para}
										</p>
										</div>
									</div>
								</article>
							</section>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export { WhyChooseUs }