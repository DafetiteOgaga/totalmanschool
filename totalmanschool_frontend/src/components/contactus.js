import React, {useState, useEffect} from 'react';
import { schoolInfo } from "../entry/entry"
import { useDevice } from "../context/deviceTypeContext"
import { HangingHeader } from "../feats/feats";
// import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchBrevoKeyFromBackend } from '../hooks/useFetchApi'
import { useBrevoEmail } from '../hooks/useBrevoEmail';
import { titleCase } from '../hooks/changeCase';
import { Spinner } from '../hooks/spinner/spinner';

const formInputValues = [
	{
		type: "text",
		name: "name",
		id: "name",
		placeholder: "Your Name",
	},
	{
		type: "email",
		name: "email",
		id: "email",
		placeholder: "Email",
	},
	{
		type: "textarea",
		name: "message",
		id: "message",
		placeholder: "Your message ...",
		rows: "6",
	}
]
const formValues = {
	name: "",
	email: "",
	message: ""
}

async function getKey(apiKey, setApiKey, setApiEmail) {
	if (!apiKey) {
		// console.log('Fetching API key...');
		try {
			const endpoint = 'dafetite_brevo_api_key/dafetite_brevo_api'
			const response = await fetchBrevoKeyFromBackend(endpoint);
			if (response?.success && response?.key) {
				setApiKey(response.key);
				setApiEmail(response.email);
			} else {
				console.error('Failed to fetch API key:', response);
			}
		} catch (err) {
			console.error('Error while fetching API key:', err);
		}
	} else {
		// console.warn('Using existing API key');
	}
}

function ContactUs() {
	const { label, width } = useDevice();
	const { sendContactEmails, success, loading, error, clearInfo } = useBrevoEmail(); // useBrevoEmail hook
	// const { scrollRef, isOverlayed } = useOutletContext();
	const [formData, setFormData] = useState(formValues);
	const [apiKey, setApiKey] = useState(null);
	const [apiEmail, setApiEmail] = useState(null);

	const handleInputChange = (e) => {
		getKey(apiKey, setApiKey, setApiEmail);
		console.log('apiKey:', apiKey);
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	}

	// fetch API key on component mount
	useEffect(() => {
		if (!apiKey) getKey(apiKey, setApiKey, setApiEmail);
	}, []);

	const handleSubmit = async (e) => {
		console.log("handleSubmit called");
		e.preventDefault();
		// console.warn('success before clearing:', success)
		clearInfo();
		// console.warn('success after clearing:', success)

		const config = {
			apiKey: apiKey, // 'brevo-api-key',
			apiEmail: apiEmail, // brevo email address
			// ownerEmail: 'ogagadafetite@gmail.com', // your-email',
			ownerEmail: schoolInfo.email, // your-email',
			senderName: titleCase(`${schoolInfo.the} ${schoolInfo.totalman} ${schoolInfo.school}`), // 'Your Website Name'
		};

		const cleanedData = {...formData, subject: 'Message Received! - Email confirmation'};
		try {
			// passed formData and config to the hook
			await sendContactEmails(cleanedData, config);
			// Success
			toast.success(
				<div>
					{/* use success response */}
					Success!
					{success}
					<br />
					Kindly check your inbox
					<br />
					(or spam folder) for email
				</div>);
				setFormData(formValues); // Resets the form data
			// console.log("Emails sent successfully");
		} catch (err) {
			// Error
			toast.error(
				<div>
					{/* use error response */}
					Error: :::
					{error}
					:::::
					{err.message}
				</div>);
			// console.error("Failed to send emails:", error);
			console.error("Failed to send emails:", err);
		}
	};
	console.log({formData, apiKey})

	return (
		<section className="ContactUs section contact" data-section="section6">
			<HangingHeader
					headerText={"Contact Us"}
					invertColor={true} />
			<div className="container">
				<div className="row">
					{/* <HangingHeader
					headerText={"Contact Us"}
					invertColor={true} /> */}
					<div className="col-md-6">
						<form onSubmit={handleSubmit} className="animate slide-from-bottom">
							<div className="row">
								{formInputValues.map((input, index) => (
									<div key={index} className={`col-md-${input.type!=='textarea'?'6':'12'}`}>
									
										<fieldset className="">
										{input.type!=='textarea' ?
											<input
												// key={index}
												type={input.type}
												name={input.name}
												className="form-control animate slide-from-left"
												id={input.id}
												placeholder={input.placeholder}
												value={formData[input.name]}
												onChange={handleInputChange}
												style={{
													transitionDelay: `${index * 0.4}s`,
												}}
												required
											/>
											:
											<textarea
												name={input.name}
												rows={input.rows}
												className="form-control animate slide-from-right"
												id={input.id}
												placeholder={input.placeholder}
												value={formData[input.name]}
												onChange={handleInputChange}
												style={{
													transitionDelay: `${index * 0.2}s`,
												}}
												required
												/>}
										</fieldset>
									</div>
								))}
								<div className="col-md-12">
									<fieldset>
										<button
										type="submit"
										id="form-submit"
										disabled={loading}
										style={{
											transitionDelay: `0.3s`,
										}}
										className="button submit animate slide-from-top">
											{loading?<Spinner type="dot" />:'Send Message'}
										</button>
									</fieldset>
								</div>
							</div>
						</form>
					</div>
					<div className="col-md-6">
						<div id="map"
						className='animate slide-from-right'
						style={{ transitionDelay: '0.5s' }}>
							<iframe
							title={`${schoolInfo.the} ${schoolInfo.totalman} ${schoolInfo.school}`}
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.194123551847!2d3.5827875749927114!3d6.4970903934950766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfa0be5688a95%3A0x2b9707061801a1d6!2s11%20Ojamakinwa%20Takuro%20St%2C%20Lambasa%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1778001833601!5m2!1sen!2sng"
							width="550"
							height="422px"
							style={{
								border:0,
								// width: width > 1024 ? 550 :
								// 		width > 900 ? 480 :
								// 		width > 800 ? 420 :
								// 		width > 450 ? 370 :
								// 		width > 415 ? 385 :
								// 		width > 385 ? 365 :
								// 		width > 360 ? 365 : 315
								width: "-webkit-fill-available",
								}}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export { ContactUs }