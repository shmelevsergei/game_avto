import { FC, useEffect, useState } from 'react'
import RulesProfile from './RulesProfile.tsx'

type NextQuestion = {
	text: string
	setVisibleModal: (visible: boolean) => void
	setIsVisible: (visible: boolean) => void;
	isVisible: boolean
}

const NextQuestion: FC<NextQuestion> = ({ text, setVisibleModal, setIsVisible, isVisible }) => {
	const [timer, setTimer] = useState(5)

	useEffect(() => {
		if (isVisible && timer > 0) {
			const countDown = setInterval(() => {
				setTimer(timer => timer - 1)
			}, 1000)
			return () => {
				clearInterval(countDown)
			}
		} else if (timer === 0) {
			setVisibleModal(false)
			setIsVisible(false)
			setTimer(5)
		}


	}, [timer, setVisibleModal, isVisible])

	return (

		<div
			className={'fixed top-0 left-0 w-full h-full bg-slate-300 flex flex-col text-3xl justify-center items-center z-40 text-slate-50'}>
			<h1 className={'text-3xl text-slate-900'}>{text}</h1>
			<span className={'text-[80px] mt-5 font-bold text-slate-900'}>{timer}</span>
			<div className={'mt-12'}>
				<RulesProfile />
			</div>

		</div>
	)
}

export default NextQuestion