import { schoolName } from "../entry/entry";
import { useDevice } from "../context/deviceTypeContext";

const capitalCase = (str) => {
	// console.log({str})
	if (!str) return null
	const converted = str.trim().toUpperCase()
	// console.log({converted})
	return converted
}
function AppLogo() {
	const { labe, width } = useDevice()
	return (
		<svg
		width={`${width>900?'450':
				width>450?'350':
				width>400? '300':
				'250'}`}
		height="120"
		viewBox="0 0 600 120"
		>
			{/* Vertical THE */}
			<text
				x="42"
				y="92"
				transform="rotate(-90 40 90)"
				style={{
					fontFamily: "Arial, Helvetica, sans-serif",
					fontWeight: 700,
					fontSize: "18px",
					letterSpacing: "2px",
					fill: "#f5a425"
				}}
			>
				{capitalCase(schoolName.the)}
			</text>

			{/* TOTALMAN */}
			<text
				x="45"
				y="85"
				style={{
					fontFamily: "Arial, Helvetica, sans-serif",
					fontWeight: 700,
					fontSize: "50px",
					fill: "#fff",
				}}
			>
				{capitalCase(schoolName.totalman)}
			</text>

			{/* school */}
			<text
				x="325"
				y="85"
				style={{
					fontFamily: "Arial, Helvetica, sans-serif",
					fontWeight: 700,
					fontSize: "50px",
					fill: "#f5a425",
				}}
			>
				{capitalCase(schoolName.school)}
			</text>

		</svg>
	);
}
export { AppLogo }