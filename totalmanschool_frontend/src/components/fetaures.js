
import { Link } from 'react-router-dom';
import { useDevice } from '../context/deviceTypeContext';

function Features() {
	const { label, width } = useDevice()
	return (
		<section className="Features features">
			<div className="container _750">
			<div className={`row justify-content-center ${width>900?'flex-nowrap':''}`}>
			<div className="col-lg-4 col-12">
					<div className="features-post">
						<div className="features-content">
							<div className="content-show">
								<h4><i className="fa fa-puzzle-piece"></i>Kindergarten</h4>
							</div>
							<div className="content-hide">
								<p className='font-md'>
									Our Kindergarten program provides a warm, safe, and engaging environment where young learners develop foundational skills in language, numbers, creativity, and social interaction through play-based learning.
								</p>
								<p className="font-md hidden-sm">
									We focus on building curiosity, confidence, and early learning habits that prepare children for smooth transition into primary education.
								</p>
								<div className="scroll-to-section"><Link>More Info.</Link></div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-12">
					<div className="features-post">
						<div className="features-content">
							<div className="content-show">
								<h4><i className="fa fa-pencil"></i>Primary</h4>
							</div>
							<div className="content-hide">
								<p className='font-md'>
									Our Primary education program builds a strong academic foundation in core subjects including English, Mathematics, Science, and Social Studies through structured and interactive learning methods.
								</p>
								<p className="font-md hidden-sm">
									We aim to develop discipline, critical thinking, and a lifelong love for learning in every child.
								</p>
								<div className="scroll-to-section"><Link>More Info.</Link></div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-12">
					<div className="features-post second-features">
						<div className="features-content">
							<div className="content-show">
								<h4><i className="fa fa-graduation-cap"></i>Secondary</h4>
							</div>
							<div className="content-hide">
								<p className='font-md'>
									Our Secondary school program prepares students for academic excellence through a balanced curriculum that combines sciences, arts, and commercial studies with strong emphasis on examination success and personal development.
								</p>
								<p className="font-md hidden-sm">
									Students are equipped with critical thinking skills, leadership qualities, and the knowledge required for higher education and future careers.
								</p>
								<div className="scroll-to-section"><Link>Read More</Link></div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-12">
					<div className="features-post third-features">
						<div className="features-content">
							<div className="content-show">
								<h4><i className="fa fa-book"></i>Adult Education</h4>
							</div>
							<div className="content-hide">
								<p className='font-md'>
									Our Adult Education program provides flexible learning opportunities for learners seeking to complete basic education, improve literacy, or acquire new academic and vocational skills.
								</p>
								<p className="font-md hidden-sm">
									We support lifelong learning by empowering adults with knowledge and competencies needed for personal growth and career advancement.
								</p>
								<div className="scroll-to-section"><Link>Read More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</section>
	)
}
export { Features }