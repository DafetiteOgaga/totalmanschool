

function HangingHeader({headerText, invertColor=false, reduceMarginLine=false}) {
	return (
		<div className="col-md-12">
			<div className="section-heading">
				<h2 className={`animate slide-from-top
					${invertColor?'color-w border-w invert':''}
					${reduceMarginLine?'why-choose-us':''}`}>{headerText}</h2>
			</div>
		</div>
	)
}
export { HangingHeader }