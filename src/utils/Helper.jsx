const getFormattedTime = (milliseconds) => {
	let totalSeconds = parseInt(Math.floor(milliseconds / 1000))
	let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
	let totalHours = parseInt(Math.floor(totalMinutes / 60))
	let days = parseInt(Math.floor(totalHours / 24))

	let secs = parseInt(totalSeconds % 60)
	let mins = parseInt(totalMinutes % 60)
	let hrs = parseInt(totalHours % 24)

	return `${days} : ${hrs} :  ${mins} : ${secs}`
}

export { getFormattedTime }
