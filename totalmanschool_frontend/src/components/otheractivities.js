import { useState,  useEffect } from "react"
import course01 from '../assets/images/courses-01.jpg'
import course02 from '../assets/images/courses-02.jpg'
import course03 from '../assets/images/courses-03.jpg'
import course04 from '../assets/images/courses-04.jpg'
import course05 from '../assets/images/courses-05.jpg'
import author01 from '../assets/images/author-01.png'
import author02 from '../assets/images/author-02.png'
import author03 from '../assets/images/author-03.png'
import author04 from '../assets/images/author-04.png'
import author05 from '../assets/images/author-05.png'
import { Link } from 'react-router-dom';
import { useDevice } from '../context/deviceTypeContext'

function OtherActivities() {
	const { label, width } = useDevice();
	// console.log({label, width})
	const [isTransitioning, setIsTransitioning] = useState(true);
	const [shiftIndex, setShiftIndex] = useState(0)
	const itemWidth = 311;
	const totalItems = 12;
	const visibleOffset = 0;
	const visibleCount = width > 1024 ? 5 : width > 450 ? 3 : 2;
	const translateX = -((visibleOffset + shiftIndex) * itemWidth);
	useEffect(() => {
		const interval = setInterval(() => {
			setShiftIndex(prev => prev + 1);
		}, 2000);
		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
		if (shiftIndex === totalItems - visibleCount + 1) {
			setTimeout(() => {
				setIsTransitioning(false);
				setShiftIndex(0);
				setTimeout(() => setIsTransitioning(true), 50);
			}, 250);
		}
	}, [shiftIndex]);
	const nextSlide = () => {
		setShiftIndex(prev => prev + 1);
	};
	return (
		<section className="OtherActivities section courses" data-section="section4">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<div className="section-heading">
							<h2>Life Beyond the Classroom</h2>
						</div>
					</div>
					<div className="owl-carousel owl-theme owl-loaded owl-drag">
						<div className="owl-stage-outer">
							<div className="owl-stage" style={{
								transition: isTransitioning ? "0.25s" : "none",
								width: 7153,
								transform: `translate3d(${translateX}px, 0px, 0px)`
							}}>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course01} alt="Course #1" />
										<div className="down-content">
											<h4>Extracurricular Activities</h4>
											<p className="font-md">
											We offer a wide range of extracurricular activities including music, drama, arts, and sports, helping students discover their talents and develop confidence beyond the classroom.
											</p>
											{/* <div className="author-image">
												<img src={author01} alt="Author 1" />
											</div>
											<div className="text-button-pay">
												<Link>Pay <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course02} alt="Course #2" />
										<div className="down-content">
											<h4>Creative Arts & Expression</h4>
											<p className="font-md">
											Students are encouraged to express themselves through art, music, dance, and drama, fostering creativity and emotional development.
											</p>
											{/* <div className="author-image">
												<img src={author02} alt="Author 2" />
											</div>
											<div className="text-button-free">
												<Link>Free <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course03} alt="Course #3" />
										<div className="down-content">
											<h4>Leadership & Personal Development</h4>
											<p className="font-md">
											We nurture leadership skills and personal growth through student-led activities, mentorship, and character-building programs.
											</p>
											{/* <div className="author-image">
												<img src={author03} alt="Author 3" />
											</div>
											<div className="text-button-pay">
												<Link>Pay <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course04} alt="Course #4" />
										<div className="down-content">
											<h4>STEM & Innovation</h4>
											<p className="font-md">
											Our STEM programs introduce students to science, technology, engineering, and mathematics through hands-on learning and innovative projects.
											</p>
											{/* <div className="author-image">
												<img src={author04} alt="Author 4" />
											</div>
											<div className="text-button-free">
												<Link>Free <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course05} alt="" />
										<div className="down-content">
											<h4>Community Engagement</h4>
											<p className="font-md">
											We encourage students to give back to society through community service, outreach programs, and social responsibility initiatives.
											</p>
											{/* <div className="author-image">
												<img src={author05} alt="" />
											</div>
											<div className="text-button-pay">
												<Link>Pay <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course01} alt="" />
										<div className="down-content">
											<h4>Mentorship & Guidance</h4>
											<p className="font-md">
											Our mentorship programs provide students with guidance, support, and motivation to achieve academic and personal success.
											</p>
											{/* <div className="author-image">
												<img src={author01} alt="" />
											</div>
											<div className="text-button-free">
												<Link>Free <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course02} alt="" />
										<div className="down-content">
											<h4>Public Speaking & Confidence</h4>
											<p className="font-md">
											Students develop strong communication skills through debates, presentations, and public speaking opportunities.
											</p>
											{/* <div className="author-image">
												<img src={author02} alt="" />
											</div>
											<div className="text-button-free">
												<Link>Free <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course03} alt="" />
										<div className="down-content">
											<h4>ICT & Digital Skills</h4>
											<p className="font-md">
											We equip students with essential digital skills, preparing them for a technology-driven world through practical ICT training.
											</p>
											{/* <div className="author-image">
												<img src={author03} alt="" />
											</div>
											<div className="text-button-pay">
												<Link>Pay <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course04} alt="" />
										<div className="down-content">
											<h4>Competitions & Achievements</h4>
											<p className="font-md">
											Students participate in academic and extracurricular competitions that promote excellence, resilience, and a winning mindset.
											</p>
											{/* <div className="author-image">
												<img src={author04} alt="" />
											</div>
											<div className="text-button-pay">
												<Link>Pay <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course05} alt="" />
										<div className="down-content">
											<h4>Character & Moral Development</h4>
											<p className="font-md">
											We instill strong values, discipline, and integrity, shaping students into responsible and respectful individuals.
											</p>
											{/* <div className="author-image">
												<img src={author05} alt="" />
											</div>
											<div className="text-button-free">
												<Link>Free <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course01} alt="" />
										<div className="down-content">
											<h4>Excursions & Educational Trips</h4>
											<p className="font-md">
											Our educational trips provide real-world learning experiences that broaden students’ knowledge and exposure beyond the classroom.
											</p>
											{/* <div className="author-image">
												<img src={author01} alt="" />
											</div>
											<div className="text-button-pay">
												<Link>Pay <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{width: 281, marginRight: 30}}>
									<div className="item">
										<img src={course01} alt="" />
										<div className="down-content">
											<h4>School Events & Celebrations</h4>
											<p className="font-md">
											We organize engaging events, cultural days, and celebrations that promote unity, diversity, and school spirit.
											</p>
											{/* <div className="author-image">
												<img src={author01} alt="" />
											</div>
											<div className="text-button-pay">
												<Link>Pay <i className="fa fa-angle-double-right"></i></Link>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export { OtherActivities }