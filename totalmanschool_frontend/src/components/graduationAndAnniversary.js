import { useState, useEffect, useRef } from "react";
import { useDevice } from "../context/deviceTypeContext";
import { titleCase } from "../hooks/changeCase";

const pad = (n) => String(n).padStart(2, "0");

function getWeekRangeOfJuly(year, weekNumber = 3) {
	// July starts at month index 6
	const julyStart = new Date(year, 6, 1);

	// Week starts at day 1
	const startDay = (weekNumber - 1) * 7 + 1;
	const endDay = startDay + 6;

	const start = new Date(year, 6, startDay, 0, 0, 0);
	const end = new Date(year, 6, Math.min(endDay, 31), 23, 59, 59);

	// console.log({start, end, julyStart})
	return { start, end };
}
function getYearAndDiff() {
	const now = new Date();
	const fullYear = now.getFullYear()
	const diff = fullYear - 2016;
	let suffix = "th";

	// Handle 11th, 12th, 13th
	if (diff % 100 < 11 || diff % 100 > 13) {
		switch (diff % 10) {
			case 1:
				suffix = "st";
				break;
			case 2:
				suffix = "nd";
				break;
			case 3:
				suffix = "rd";
				break;
			default:
				suffix = "th";
		}
	}
	return {
		year: fullYear,
		yearDiff: `${diff}${suffix}`,
	}
}

function getTimeLeft(target) {
	const diff = target - Date.now();

	if (diff <= 0) {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			expired: true,
		};
	}

	return {
		days: Math.floor(diff / 86400000),
		hours: Math.floor((diff % 86400000) / 3600000),
		minutes: Math.floor((diff % 3600000) / 60000),
		seconds: Math.floor((diff % 60000) / 1000),
		expired: false,
	};
}
function getTargetState() {
	const now = new Date();
	const year = now.getFullYear();

	const { start, end } = getWeekRangeOfJuly(year, 3);

	// CASE 1: Before 3rd week → countdown to start
	if (now < start) {
		return {
			mode: "COUNTDOWN",
			target: start,
		};
	}

	// CASE 2: During 3rd week → lock at zero
	if (now >= start && now <= end) {
		return {
			mode: "ACTIVE",
			target: end,
		};
	}

	// CASE 3: After 3rd week → next year countdown
	const next = getWeekRangeOfJuly(year + 1, 3);
	return {
		mode: "RESET",
		target: next.start,
	};
}
function updateState({setState, setTimeLeft}) {
	const newState = getTargetState();
	setState(newState);

	// If ACTIVE week → lock at 0
	if (newState.mode === "ACTIVE") {
		setTimeLeft({
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			expired: true,
		});
	} else {
		setTimeLeft(getTimeLeft(newState.target));
	}
}
const timeContext = [
	"days", "hours", "minutes", "seconds",
]
function GraduationAndAnniversary() {
	const { label, width } = useDevice()
	const [state, setState] = useState(() => getTargetState());
	const [timeLeft, setTimeLeft] = useState(() =>
		state.mode === "ACTIVE"
			? { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
			: getTimeLeft(state.target)
	);
	const intervalRef = useRef(null);

	useEffect(() => {
		clearInterval(intervalRef.current);
		updateState({setState, setTimeLeft}); // run once immediately

		intervalRef.current = setInterval(() => {
			updateState({setState, setTimeLeft});
		}, 1000);

		return () => clearInterval(intervalRef.current);
	}, []);
	const yr = getYearAndDiff()
	// console.log({yr})
	return (
		<section className="GraduationAndAnniversary section coming-soon" data-section="section3">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-7 col-xs-12">
						<div className="continer centerIt">
							<div>
								<h4 className="animate slide-from-bottom-right">Our {yr.year} <em className="animate slide-from-bottom-left delay-2">GRADUATION</em> and <em className="animate slide-from-bottom-left delay-2">{yr.yearDiff} ANNIVERSARY</em> ceremonies will take place in:</h4>
								<div className={`counter animate slide-from-bottom-left ${width<=450?'d-flex justify-content-center':''}`}>
									{timeContext.map((time, tidx) => {
										return (
											<div key={tidx} className={`${time} w-auto`}>
												<div className="value">{pad(timeLeft[time])}</div>
												<span>{titleCase(time)}</span>
											</div>
										)
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export { GraduationAndAnniversary }