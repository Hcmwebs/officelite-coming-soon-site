import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StyledTimer } from '../styles'

const Timer = ({ duration }) => {
	const [time, setTime] = useState(duration)
	let localDate = new Date()
	let startDate = new Date(
		localDate.setDate(localDate.getDate() + 30)
	).toDateString()
	const getFormattedTime = (milliseconds) => {
		let totalSeconds = parseInt(Math.floor(milliseconds / 1000))
		let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
		let totalHours = parseInt(Math.floor(totalMinutes / 60))
		let days = parseInt(Math.floor(totalHours / 24))

		let secs = parseInt(totalSeconds % 60)
		let mins = parseInt(totalMinutes % 60)
		let hrs = parseInt(totalHours % 24)

		return (
			<StyledTimer>
				<div className='clockTitle'>
					<h3>Coming {startDate}</h3>
				</div>
				<div className='clock'>
					<div className='timer'>
						{days} <span> days</span>
					</div>
					:
					<div className='timer'>
						{hrs} <span>hours</span>
					</div>
					:
					<div className='timer'>
						{mins} <span>mins</span>
					</div>
					:
					<div className='timer'>
						{secs} <span>secs</span>
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
