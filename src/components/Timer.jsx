import React, { useState, useEffect } from 'react'
import { StyledTimer } from '../styles'

const Timer = ({ duration }) => {
	const [time, setTime] = useState(duration)
	let localDate = new Date()
	let startDate = new Date(
		localDate.setDate(localDate.getDate() + 30)
	).toDateString()
	const getFormattedTime = (milliseconds) => {
		const totalSeconds = parseInt(Math.floor(milliseconds / 1000))
		const totalMinutes = parseInt(Math.floor(totalSeconds / 60))
		const totalHours = parseInt(Math.floor(totalMinutes / 60))
		const days = parseInt(Math.floor(totalHours / 24))

		const secs = parseInt(totalSeconds % 60)
		const mins = parseInt(totalMinutes % 60)
		const hrs = parseInt(totalHours % 24)

		return (
			<StyledTimer>
				<div className='clockTitle'>
					<h3>
						Coming <span>{startDate}</span>
					</h3>
				</div>
				<div className='clock'>
					<div className='timer'>
						<h4>{days}</h4>
						<span>days</span>
					</div>

					<div className='timer'>
						<h4>{hrs}</h4>
						<span>hours</span>
					</div>

					<div className='timer'>
						<h4>{mins}</h4>
						<span>mins</span>
					</div>

					<div className='timer'>
						<h4>{secs}</h4>
						<span>secs</span>
					</div>
				</div>
			</StyledTimer>
		)
	}

	useEffect(() => {
		setTimeout(() => {
			setTime(time - 1000)
		}, 1000)
	}, [time])
	return <div>{getFormattedTime(time)}</div>
}

export default Timer
