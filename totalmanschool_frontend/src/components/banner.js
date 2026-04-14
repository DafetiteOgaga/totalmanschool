import backgroundVideo from '../assets/images/course-video.mp4'
import { schoolName } from '../entry/entry'
import { Link } from 'react-router-dom';

function Banner() {
	return (
		<section className="Banner section main-banner" id="top" data-section="section1">
			<video autoPlay muted loop id="bg-video">
				<source src={backgroundVideo} type="video/mp4" />
			</video>

			<div className="video-overlay header-text">
				<div className="caption">
					<h6>{schoolName.the} {schoolName.totalman} {schoolName.school}</h6>
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