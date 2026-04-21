import backgroundVideoMP4 from '../assets/images/course-video.mp4'
// import backgroundVideoWEBM from '../assets/images/course-video.webm'
import { schoolInfo } from '../entry/entry'
import { Link, useLocation } from 'react-router-dom';
import { BadgeOutline } from './appLogo';
import { useEffect } from 'react';

function Banner() {
	// const location = useLocation();

	// useEffect(() => {
	// 	const observer = new IntersectionObserver(/* ... */);
	// 	const animatedElements = document.querySelectorAll(".animate");
	// 	animatedElements.forEach(el => observer.observe(el));
	// 	return () => observer.disconnect();
	// }, [location.pathname]);
	return (
		<section className="Banner section main-banner" id="top" data-section="section1">
			<video
			autoPlay
			muted
			loop
			playsInline
			preload="metadata"
			id="bg-video">
				<source src={backgroundVideoMP4} type="video/mp4" />
				{/* <source src={backgroundVideoWEBM} type="video/webm" /> */}
			</video>

			<div className="video-overlay header-text">
				<div className="caption">
					<div className='badge'>
						<div className='animate slide-from-bottom'>
							<BadgeOutline />
						</div>
					</div>
					<h6 className='animate slide-from-bottom'>{schoolInfo.the} {schoolInfo.totalman} {schoolInfo.school}</h6>
					<h2 className='animate slide-from-top'>Shaping <em className='animate slide-from-bottom delay-2'>Minds</em>, inspiring <em className='animate slide-from-bottom delay-2'>Excellence</em> and building <em className='animate slide-from-bottom delay-2'>Future Leaders</em>.</h2>
					<div className="main-button">
						<div className="scroll-to-section"><Link className='animate slide-from-right delay-3'>Discover more</Link></div>
					</div>
				</div>
			</div>
		</section>
	)
}
export { Banner }