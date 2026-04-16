
import { Link } from 'react-router-dom';
import { useDevice } from '../context/deviceTypeContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const featuresArr = [
	{
		icon: "puzzle-piece",
		title: "Preschool",
		para1: "Our Preschool program provides a warm, safe, and engaging environment where young learners develop foundational skills in language, numbers, creativity, and social interaction through play-based learning.",
		para2: "We focus on building curiosity, confidence, and early learning habits that prepare children for smooth transition into primary education.",
	},
	{
		icon: "pencil",
		title: "Primary",
		para1: "Our Primary education program builds a strong academic foundation in core subjects including English, Mathematics, Science, and Social Studies through structured and interactive learning methods.",
		para2: "We aim to develop discipline, critical thinking, and a lifelong love for learning in every child.",
	},
	{
		icon: "graduation-cap",
		title: "Secondary",
		para1: "Our Secondary school program prepares students for academic excellence through a balanced curriculum that combines sciences, arts, and commercial studies with strong emphasis on examination success and personal development.",
		para2: "Students are equipped with critical thinking skills, leadership qualities, and the knowledge required for higher education and future careers.",
	},
]

function Features() {
	const { label, width } = useDevice()
	return (
		<section className="Features features">
			<div className="container">
				<div className={`row justify-content-center ${width>900?'flex-nowrap':''}`}>
					{featuresArr.map((feature, fidx) => {
						return (
							<div key={fidx} className="col-lg-4 col-12">
								<div className="features-post">
									<div className="features-content">
										<div className="content-show">
											<h4>
												<FontAwesomeIcon icon={feature.icon} color="#fff" /> {feature.title}</h4>
										</div>
										<div className="content-hide">
											<p className='font-md'>
												{feature.para1}
											</p>
											<p className="font-md hidden-sm">
												{feature.para2}
											</p>
											<div className="scroll-to-section"><Link>More Info.</Link></div>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
export { Features }