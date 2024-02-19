import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function infoCare(e, scaleValue, careType) {
	alert(
		`This plant requires a ${careType} level of ${scaleValue}!`
	)
	e.stopPropagation()
}
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={(e) => infoCare(e,scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
