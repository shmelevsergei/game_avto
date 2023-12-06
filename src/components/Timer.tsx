import { FC, useEffect, useState } from 'react'

type TimerProps = {
	start: boolean
	stop: boolean
	onTimerUpdate: (timerValue: string) => void
}

const Timer: FC<TimerProps> = ({ start, stop, onTimerUpdate }) => {
	const initialTime = 15000 // Ваше начальное значение времени в миллисекундах
	const [time, setTime] = useState(initialTime)
	const [isActive, setIsActive] = useState(false)
	const [colorTime, setColorTime] = useState('')


	useEffect(() => {
		if (start) {
			setTime(initialTime)
			setIsActive(true)
		}
		if (stop) {
			setIsActive(false)
			setTime(initialTime)
		}
	}, [start, stop, initialTime])

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | undefined

		const updateTimer = () => {
			if (isActive) {
				const currentTime = Date.now()
				const endTime = currentTime + time

				const tick = () => {
					const remainingTime = endTime - Date.now()
					if (remainingTime <= 0) {
						setIsActive(false)
						setTime(0)
					} else {
						if (remainingTime < 3000) {
							setColorTime('text-red-600')
						} else {
							setColorTime('text-blue-600')
						}
						setTime(remainingTime)
						timeoutId = setTimeout(tick, 10) // Устанавливаем более длительный интервал обновления
					}
				}

				tick()
			} else if (timeoutId !== undefined) {
				clearTimeout(timeoutId)
			}
		}

		updateTimer()

		return () => {
			if (timeoutId !== undefined) {
				clearTimeout(timeoutId)
			}
		}
	}, [isActive, time])

	useEffect(() => {
		onTimerUpdate(formatTime(time))
	}, [time, onTimerUpdate])

	const formatTime = (milliseconds: number) => {
		const seconds = (milliseconds / 1500).toFixed(3)
		return `${seconds}`
	}

	return <div className={`text-xl lg:text-6xl font-semibold text-center mt-5 ${colorTime}`}>{formatTime(time)}</div>
}

export default Timer