import { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

interface IModal {
	setVisibleModal: (visible: boolean) => void
	isNextQuestion: boolean
	life: number
}

const LoseModal: FC<IModal> = ({ setVisibleModal, isNextQuestion, life }) => {
	const [timer, setTimer] = useState(3)

	useEffect(() => {
		if (isNextQuestion) {
			setTimeout(() => {
				setTimer(timer => timer - 1)
			}, 1000)
		}
	}, [timer, isNextQuestion])

	useEffect(() => {
		if (timer < 1) {
			setVisibleModal(false)
		}
	}, [timer])

	return (
		<div
			className={'absolute  top-0 left-0 bottom-0 right-0 bg-black bg-opacity-20 flex justify-center items-center'}>
			<div
				className={'w-[300px] h-[200px] rounded bg-red-500  flex flex-col justify-center items-center text-center text-slate-50 p-5'}>

				{
					isNextQuestion ? (
						<>
							<p className={'text-2x'}>Неверный ответ!</p>
							<p>Осталось {life} жизней</p>
						</>
					) : (
						<>
							<p className={'text-2x'}>Вы проиграли, следующая игра через 7 дней!</p>

							<NavLink to={'/home'} onClick={() => setVisibleModal(false)}
									 className={'bg-green-500 text-white py-3 px-10 mt-10 rounded shadow-green-600'}>Закрыть
							</NavLink>
						</>
					)
				}

			</div>
		</div>

	)
}

export default LoseModal