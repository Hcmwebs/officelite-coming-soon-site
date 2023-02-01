import React, { useState, useEffect } from 'react'
import { getFormattedTime } from '../utils/Helper'

const Timer = ({ duration }) => {
	const [time, setTime] = useState(duration)

	useEffect(() => {
		setTimeout(() => {
			setTime(time - 1000)
		}, 1000)
	}, [time])
	return <div>{getFormattedTime(time)}</div>
}

export default Timer
