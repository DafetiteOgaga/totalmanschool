import { useState, useEffect,useRef } from "react"
import { Link } from 'react-router-dom';
import chooseUs01 from '../assets/images/choose-us-image-01.png'
import chooseUs02 from '../assets/images/choose-us-image-02.png'
import chooseUs03 from '../assets/images/choose-us-image-03.png'
import { schoolName } from "../entry/entry";
import { titleCase } from "../hooks/changeCase";

function EducationalServices() {
	const [activeTab, setActiveTab] = useState(1)
	const TOTAL_TABS = 3;
	const intervalRef = useRef(null);

	const resetInterval = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setActiveTab(prev => prev === TOTAL_TABS ? 1 : prev + 1);
		}, 5000); // 30 seconds
	};

	useEffect(() => {
		resetInterval();
		return () => clearInterval(intervalRef.current);
	}, []);
	return (
		<section className="EducationalServices section why-us" data-section="section2">
			<div className="container _1300">
				<div className="row">
					<div className="col-md-12">
						<div className="section-heading">
							<h2>Why choose {titleCase(schoolName.totalman)} {titleCase(schoolName.school)}?</h2>
						</div>
					</div>
					<div className="col-md-12">
						<div id='tabs'>
							<ul>
								<li className={`${activeTab===1?'ui-tabs-active':''}`}><Link onClick={()=>setActiveTab(1)}>Academic Excellence</Link></li>
								<li className={`${activeTab===2?'ui-tabs-active':''}`}><Link onClick={()=>setActiveTab(2)}>Experienced Teachers</Link></li>
								<li className={`${activeTab===3?'ui-tabs-active':''}`}><Link onClick={()=>setActiveTab(3)}>Modern Learning Environment</Link></li>
							</ul>
							<section className='tabs-content'>
								<article className={`tab-state ${activeTab===1?'show':'hide'}`}>
									<div className="row">
										<div className="col-md-6">
											<img src={chooseUs01} alt="" />
										</div>
										<div className="col-md-6">
										<h4>Academic Excellence</h4>
										<p className='font-lgr'>
											{titleCase(schoolName.totalman)} {titleCase(schoolName.school)} is committed to delivering high academic standards through a well-structured curriculum, qualified educators, and continuous student assessment to ensure outstanding performance.
										</p>
										</div>
									</div>
								</article>
								<article className={`tab-state ${activeTab===2?'show':'hide'}`}>
									<div className="row">
										<div className="col-md-6">
											<img src={chooseUs02} alt="" />
										</div>
										<div className="col-md-6">
										<h4>Experienced Teachers</h4>
										<p className='font-lgr'>
											Our dedicated and highly qualified teachers bring years of experience in education, ensuring that students receive proper guidance, mentorship, and support to reach their full potential.
										</p>
										</div>
									</div>
								</article>
								<article className={`tab-state ${activeTab===3?'show':'hide'}`}>
									<div className="row">
										<div className="col-md-6">
											<img src={chooseUs03} alt="" />
										</div>
										<div className="col-md-6">
										<h4>Modern Learning Environment</h4>
										<p className='font-lgr'>
											We provide a safe, supportive, and technology-enhanced learning environment that encourages creativity, critical thinking, and active student participation.
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
export { EducationalServices }