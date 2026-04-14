import { useState, useEffect, useRef } from "react";
import { useDevice } from "../context/deviceTypeContext";

const pad = (n) => String(n).padStart(2, "0");

function getTimeLeft(target) {
	const diff = new Date(target) - Date.now();
	if (!target || isNaN(new Date(target)) || diff <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: diff <= 0 };
	}
	return {
		days: Math.floor(diff / 86400000),
		hours: Math.floor((diff % 86400000) / 3600000),
		minutes: Math.floor((diff % 3600000) / 60000),
		seconds: Math.floor((diff % 60000) / 1000),
		expired: false,
	};
}

function getNextTargetDate() {
	const now = new Date();

	// Create target for THIS year first
	let target = new Date(`${now.getFullYear()}-12-31T23:59:59`);

	// If we've already passed it, move to next year
	if (now > target) {
		target = new Date(`${now.getFullYear() + 1}-12-31T23:59:59`);
	}
	return target;
}


function ComingSoon() {
	const { label, width } = useDevice()
	const targetDateRef = useRef(getNextTargetDate());
	const targetDate = targetDateRef.current;
	// const targetDate=getNextTargetDate()
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));
	const intervalRef = useRef(null);
	useEffect(() => {
		clearInterval(intervalRef.current);
		setTimeLeft(getTimeLeft(targetDate));
	
		if (targetDate) {
			intervalRef.current = setInterval(() => {
				const t = getTimeLeft(targetDate);
				setTimeLeft(t);
				if (t.expired) clearInterval(intervalRef.current);
			}, 1000);
		}
	
		return () => clearInterval(intervalRef.current);
	}, [targetDate]);
	return (
		<section className="ComingSoon section coming-soon" data-section="section3">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-7 col-xs-12">
						<div className="continer centerIt">
							<div>
								<h4>The next <em>WAEC</em> will commence in:</h4>
								<div className={`counter ${width<=450?'d-flex justify-content-center':''}`}>

									<div className="days w-auto">
										<div className="value">{pad(timeLeft.days)}</div>
										<span>Days</span>
									</div>

									<div className="hours w-auto">
										<div className="value">{pad(timeLeft.hours)}</div>
										<span>Hours</span>
									</div>

									<div className="minutes w-auto">
										<div className="value">{pad(timeLeft.minutes)}</div>
										<span>Minutes</span>
									</div>

									<div className="seconds w-auto">
										<div className="value">{pad(timeLeft.seconds)}</div>
										<span>Seconds</span>
									</div>

								</div>
							</div>
						</div>
					</div>
					{/* <div className="col-md-5">
						<div className="right-content">
							<div className="top-content">
								<h6>Register your free account and <em>get immediate</em> access to online courses</h6>
							</div>
							<form id="contact" action="" method="get">
								<div className="row">
									<div className="col-md-12">
										<fieldset>
											<input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required="" />
										</fieldset>
									</div>
									<div className="col-md-12">
										<fieldset>
											<input name="email" type="text" className="form-control" id="email" placeholder="Your Email" required="" />
										</fieldset>
									</div>
									<div className="col-md-12">
										<fieldset>
											<input name="phone-number" type="text" className="form-control" id="phone-number" placeholder="Your Phone Number" required="" />
										</fieldset>
									</div>
									<div className="col-md-12">
										<fieldset>
											<button type="submit" id="form-submit" className="button">Get it now</button>
										</fieldset>
									</div>
								</div>
							</form>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	)
}
export { ComingSoon }