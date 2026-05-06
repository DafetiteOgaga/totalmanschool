import { useState } from 'react';
// import { config } from './myKey';
// import { useFetchApi } from './useFetchApi';

// Function to check the size of the email content
function checkEmailContentSize(content) {
	const emailHtml = content;
	const sizeInBytes = new Blob([emailHtml]).size;
	const sizeInKB = (sizeInBytes / 1024).toFixed(2);

	console.log(`Email size: ${sizeInKB} KB`);
}

// Function to send email using Brevo API
const sendEmail = async (emailData, apiKey) => {
	const response = await fetch('https://api.brevo.com/v3/smtp/email', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'api-key': apiKey
		},
		body: JSON.stringify(emailData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || `HTTP Error: ${response.status}`);
	}

	return response.json();
};

// Function to generate email content
const emailContentTemplate = ({ formData, type = 'owner', senderName }) => {
	const { todaySeconds, todayMinutes, todayHours, todayDay, todayDateWithSuffix, todayMonthName, todayYear } = DateHook();
	const dateTimeStamp = `${todayDay}, ${todayDateWithSuffix} ${todayMonthName} ${todayYear} at exactly ${todayHours}:${todayMinutes}:${todaySeconds}`
	const h2 = type === 'owner' ? `New Message From - ${toTitleCase(formData.name)}` : 'Thank You for Your Message!';
	const socialIconStyle = 'width:24px;height:24px;vertical-align:middle;';
	const socialLinkStyle = 'margin:0 8px;text-decoration:none;display:inline-block;';
	// const socialLinks = `
	// 	<div style="text-align:center;">
	// 		<a href="https://github.com/AdeniyiEmmanuel1?tab=overview&from=2026-02-01&to=2026-02-28" target="_blank" rel="noopener noreferrer" style="${socialLinkStyle}">
	// 			<img src="https://raw.githubusercontent.com/DafetiteOgaga/dafetite_logo/refs/heads/main/github.png" alt="GitHub" style="${socialIconStyle}" />
	// 		</a>
	// 		<a href="https://www.linkedin.com/in/aden-emmanuel-117440142/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bb%2Fo04HcXRzabnbDCzJvVyQ%3D%3D" target="_blank" rel="noopener noreferrer" style="${socialLinkStyle}">
	// 			<img src="https://raw.githubusercontent.com/DafetiteOgaga/dafetite_logo/refs/heads/main/linkedin.png" alt="LinkedIn" style="${socialIconStyle}" />
	// 		</a>
	// 	</div>
	// `;

	return `
		<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
			<h2 style="color:#333;border-bottom:2px solid rgba(0,0,0,0.5);padding-bottom:10px;">${h2}</h2>
			${
				type === 'owner'
				?
				`
					<div style="background:#f8f9fa;padding:20px;border-radius:8px;margin:20px 0;">
						<p><strong>From:</strong> ${toTitleCase(formData.name)}</p>
						<p><strong>Email:</strong> ${formData.email}</p>
						<p><strong>Time:</strong> ${dateTimeStamp}</p>
					</div>
					<div style="background:#fff;padding:20px;border-left:4px solid rgba(0,0,0,0.5);margin:20px 0;">
						<h3 style="color:#333;margin-top:0;">Message:</h3>
						<p style="line-height:1.6;color:#555;">${formData.message.replace(/\n/g, '<br>')}</p>
					</div>
					<div style="text-align:center;margin-top:30px;padding-top:20px;border-top:1px solid #eee;">
						<p style="color:#888;font-size:12px;">This message was sent from my portfolio website's contact form (${dateTimeStamp}).</p>
					</div>
				`
				:
				`
					<p style="color:#555;line-height:1.6;">Dear ${toTitleCase(formData.name)},</p>
					<p style="color:#555;line-height:1.6;">
						Thank you for reaching out to us.
						This is to let you know that your message has been received by the school and and will respond as soon as possible.
					</p>
					<p style="color:#555;line-height:1.6;">
						We usually respond within 24-48 hours.
						For urgent inquiries, please reach out to us directly via phone or WhatsApp.
					</p>
					<br/>
					<div>
						<img src="https://raw.githubusercontent.com/DafetiteOgaga/dafetite_logo/refs/heads/main/thetotalmanschools.png" alt=${toTitleCase(senderName)} style="width:65px;height:50px;margin-bottom:0;" />
					</div>
					<p style="color:#555;line-height:1.6;margin-top:0;">Thank you,<br/>${toTitleCase(senderName)} Management.</p>

					<div style="text-align:center;margin-top:30px;padding-top:20px;border-top:1px solid #eee;">
						<p style="color:#888;font-size:12px;">This is an automated confirmation email (${dateTimeStamp}).</p>
					</div>
				`
			}
		</div>
	`;
};

// Custom hook for sending emails via Brevo
export const useBrevoEmail = () => {
	// console.log("useBrevoEmail hook loaded");
	const [success, setSuccess] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendContactEmails = async (formData, config) => {
		const { apiKey, apiEmail, ownerEmail, senderName } = config;
		console.log('config:', config)

		if (!apiKey || !ownerEmail) {
			throw new Error('API key and owner email are required');
		}

		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			// Email content to myself (site owner)
			// checkEmailContentSize(emailContentTemplate({formData}));
			const ownerEmailData = {
				sender: {
					name: senderName,
					email: apiEmail
				},
				to: [{
					email: ownerEmail,
					name: senderName
				}],
				replyTo: {
					email: formData.email,
					name: toTitleCase(formData.name)
				},
				subject: `New Message from ${toTitleCase(formData.name)}`,
				htmlContent: emailContentTemplate({formData, type: 'owner', senderName})
			};

			// Confirmation email to sender
			// checkEmailContentSize(emailContentTemplate({formData, type: 'visitor'}));
			const confirmationEmailData = {
				sender: {
					name: senderName,
					email: apiEmail
				},
				to: [{
					email: formData.email,
					name: toTitleCase(formData.name)
				}],
				replyTo: {
					email: ownerEmail,
					name: senderName
				},
				subject: formData.subject,
				htmlContent: emailContentTemplate({formData, type: 'visitor', senderName})
			};

			// Send both emails
			await Promise.all([
				sendEmail(ownerEmailData, apiKey),
				sendEmail(confirmationEmailData, apiKey)
			]);

			setSuccess('Message sent.');
			// return { success: true, message: 'Emails sent successfully' };

		} catch (err) {
			setError(err.message);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return {
		sendContactEmails,
		success,
		loading,
		error,
		clearInfo: () => {
			setError(null);
			setSuccess("");
		}
	};
};



function DateHook(date=new Date()) {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const daySuffixes = ['th', 'st', 'nd', 'rd'];
	const getDaySuffix = (day) => {
		const suffixIndex = (day % 10 < 4 && Math.floor(day / 10) !== 1) ? day % 10 : 0;
		return daySuffixes[suffixIndex];
	};

	const todayDate = date.getDate(); // 21
	const todayDateWithSuffix = `${todayDate}${getDaySuffix(todayDate)}`; // '21st'
	const todayMonth = date.getMonth() + 1; // 9
	const todayMonthName = months[date.getMonth()]; // 'Sep'
	const todayYear = date.getFullYear(); // 2021
	const todayDay = days[date.getDay()]; // 'Monday'
	const todayHours = date.getHours(); // 12
	const todayMinutes = date.getMinutes(); // 30
	const todaySeconds = date.getSeconds(); // 15

	return {
		todayDate,
		todayDateWithSuffix,
		todayMonth,
		todayYear,
		todayDay,
		todayMonthName,
		todayHours,
		todayMinutes,
		todaySeconds
	}
}

function toTitleCase(str) {
	return str
	.toLowerCase()
	.split(' ')
	.map(word => word.charAt(0).toUpperCase() + word.slice(1))
	.join(' ');
}