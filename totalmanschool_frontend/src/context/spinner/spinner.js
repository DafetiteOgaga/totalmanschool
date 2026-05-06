import { createContext, useContext, useState, useEffect } from "react";
import './spinner.css'

function Spinner ({type}) {
	return (
		<>
			{type === 'dot' ?
				(<div className='spinner-container'>

					{/* Loader 2: Glassy Pulse Loader */}
					<div className='spinner-pulse-container'>
						{Array.from({length: 4}).map((_, dotIdx) => {
							return (
								<div key={dotIdx}
								className="spinner-pulse-dot"></div>
							)
						})}
						{/* <div className="spinner-pulse-dot"></div>
						<div className="spinner-pulse-dot"></div>
						<div className="spinner-pulse-dot"></div> */}
					</div>
				</div>)
				:
				(<div className='spinner-container'>

					{/* Loader 3: Transparent Glass Bar Loader */}
					<div className="spinner-bar"></div>
				</div>)}
		</>
	)
}
function SpinnerBarForPage () {
	return (
		<div className='page-container'>
			{/* <div className='bar-container glass glass-lighter'> */}
			<div className='bar-container'>
				<Spinner type={'bar'} />
			</div>
		</div>
	)
}
// export { Spinner, SpinnerBarForPage }

const SpinnerContext = createContext();

export function SpinnerProvider({ children }) {
	const [pageLoading, setPageLoading] = useState(true);

	// keep your original SpinnerComponent logic here
	function SpinnerComponent() {

		if (pageLoading) {
			return <Spinner type="dot" />;
		}

		return null;
	}

	return (
		<SpinnerContext.Provider
		value={{
			pageLoading,
			setPageLoading,
			Spinner,
			SpinnerBarForPage,
			SpinnerComponent
		}}
		>
			{children}
		</SpinnerContext.Provider>
	);
}

export function useSpinner() {
	return useContext(SpinnerContext);
}