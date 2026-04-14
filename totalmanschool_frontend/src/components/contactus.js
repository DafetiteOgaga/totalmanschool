import { schoolName } from "../entry/entry"
import { useDevice } from "../context/deviceTypeContext"

function ContactUs() {
	const { label, width } = useDevice();
	return (
		<section className="ContactUs section contact" data-section="section6">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-heading">
							<h2>Contact Us</h2>
						</div>
					</div>
					<div className="col-md-6">
						<form id="contact" action="" method="post">
							<div className="row">
								<div className="col-md-6">
									<fieldset>
										<input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required="" />
									</fieldset>
								</div>
								<div className="col-md-6">
									<fieldset>
										<input name="email" type="text" className="form-control" id="email" placeholder="Your Email" required="" />
									</fieldset>
								</div>
								<div className="col-md-12">
									<fieldset>
										<textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required=""></textarea>
									</fieldset>
								</div>
								<div className="col-md-12">
									<fieldset>
										<button type="submit" id="form-submit" className="button">Send Message Now</button>
									</fieldset>
								</div>
							</div>
						</form>
					</div>
					<div className="col-md-6">
						<div id="map">
						<iframe
						title={`${schoolName.the} ${schoolName.totalman} ${schoolName.school}`}
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1892254555164!2d3.58270807489494!3d6.497711993494444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfa0b94cf3521%3A0x9daf75b55c8d8b3e!2sAddo%20Roundabout!5e0!3m2!1sen!2sng!4v1775998090396!5m2!1sen!2sng"
						// width="600"
						height="422px"
						style={{border:0, width: width > 1024 ? 600 : width > 900 ? 450 : width > 800 ? 400 : width > 450 ? 350 : width > 415 ? 385 : width > 395 ? 365 : width > 360 ? 365 : 315}}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export { ContactUs }