import backgroundVideoMP4 from '../assets/images/course-video.mp4'
// import backgroundVideoWEBM from '../assets/images/course-video.webm'
import { schoolInfo } from '../entry/entry'
import { Link } from 'react-router-dom';

function Banner() {
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
					<h6>{schoolInfo.the} {schoolInfo.totalman} {schoolInfo.school}</h6>
					<h2>Shaping <em>Minds</em>. Inspiring Excellence and Building <em>Future Leaders</em>.</h2>
					<div className="main-button">
						<div className="scroll-to-section"><Link>Discover more</Link></div>
					</div>
				</div>
			</div>
		</section>
	)
}
export { Banner }