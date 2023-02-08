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
			<Wrapper>
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
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;

	.timer {
		font-size:18px;
		width: 50px;
		height: 50px;
		padding: 0.5rem;
		font-weight:bold;
		display: grid;
		place-items: center;
		box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.3);
		border: none;
		border-radius: 0.2rem;

		span {
			font-size: 0.9rem;
			text-align: center;
			text-transform: uppercase;
		}
	}
`

export default Timer
