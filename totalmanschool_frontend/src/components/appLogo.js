import { schoolInfo } from "../entry/entry";
import { useDevice } from "../context/deviceTypeContext";

const capitalCase = (str) => {
	if (!str) return null
	const converted = str.trim().toUpperCase()
	return converted
}
const styles = {
	fontFamily: "'Cooper Black', Arial, Helvetica, sans-serif",
	fontWeight: 700,
	fontSize: "38px",
	fill: "#fff",
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
				x="0"
				y="85"
				style={{...styles,
				}}
			>
				{capitalCase(schoolInfo.the)}
			</text>

			{/* TOTALMAN */}
			<text
				x="90"
				y="85"
				style={{
					...styles,
					fill: "#f5a425",
				}}
			>
				{capitalCase(schoolInfo.totalman)}
			</text>

			{/* school */}
			<text
				x="330"
				y="85"
				style={{
					...styles,
				}}
			>
				{capitalCase(schoolInfo.school)}
			</text>

		</svg>
	);
}
export { AppLogo }