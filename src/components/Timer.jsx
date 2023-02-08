import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Timer = ({ duration }) => {
	const [time, setTime] = useState(duration)
	const getFormattedTime = (milliseconds) => {
		let totalSeconds = parseInt(Math.floor(milliseconds / 1000))
		let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
		let totalHours = parseInt(Math.floor(totalMinutes / 60))
		let days = parseInt(Math.floor(totalHours / 24))

		let secs = parseInt(totalSeconds % 60)
		let mins = parseInt(totalMinutes % 60)
		let hrs = parseInt(totalHours % 24)

		return (
			<Wrapper className='timer'>
				<div>
					{days} <span> days</span>
				</div>
				:
				<div>
					{hrs} <span>hours</span>
				</div>
				:
				<div>
					{mins} <span>mins</span>
				</div>
				:
				<div>
					{secs} <span>secs</span>
				</div>
			</Wrapper>
		)
	}

	useEffect(() => {
		setTimeout(() => {
			setTime(time - 1000)
		}, 1000)
	}, [time])
	return <div>{getFormattedTime(time)}</div>
}
const Wrapper = styled.div`
	display: grid;
	place-items: center;
	padding-block: 1.5rem;

	.timer {
		display: flex;
		gap: 10px;
	}
`

export default Timer
