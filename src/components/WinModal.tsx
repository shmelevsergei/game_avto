import { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

interface IModal {
	setVisibleModal: (visible: boolean) => void
	question: boolean
	visibleModal: boolean
	currentRating: number
	isStartSuperGame: () => void
	superGameQuestions: boolean
}

const WinModal: FC<IModal> = ({ setVisibleModal, question, currentRating, isStartSuperGame, superGameQuestions }) => {
	const [timer, setTimer] = useState(3)

	useEffect(() => {
		if (question) {
			setTimeout(() => {
				setTimer(timer => timer - 1)
			}, 1000)
		}
	}, [timer, question])

	useEffect(() => {
		if (timer === 0) {
			setVisibleModal(false)
			setTimer(3)
		}
	}, [timer])

	return (
		<div
			className={'absolute  top-0 left-0 bottom-0 right-0 bg-black bg-opacity-20 flex justify-center items-center'}>
			<div
				className={' w-max p-5 h-auto rounded bg-green-600  flex flex-col justify-center items-center text-center text-slate-50'}>
				{
					question ? (
						<>
							<p className={'text-2xl'}>Правильный ответ!</p>
							<p className={'text-2xl'}>У вас: <span
								className={'text-3xl text-red-600 font-bold'}>{currentRating}</span> баллов</p>

							<p className={'mt-2'}>Следующий вопрос через:</p>
							<p><span className={'text-xl'}>{timer}</span> секунды</p>
						</>

					) : (
						<>
							<p className={'text-2xl font-medium'}>{superGameQuestions ? 'Поздравляем, вы прошли игру!' : 'Вы ответили на все вопросы'}</p>
							{
								!superGameQuestions &&
								<p className={'mt-5'}>Хотите сыграть в <span className={'font-bold text-2xl block'}> СУПЕР ИГРУ?</span>
								</p>
							}


							<div className={'flex justify-center mt-10 gap-10'}>
								{
									!superGameQuestions &&
									<button onClick={() => {
										setVisibleModal(false)
										isStartSuperGame()
									}}
											className={'bg-blue-500 text-white py-3 px-10 rounded shadow-blue-600 text-xl'}>ИГРАТЬ
									</button>
								}


								<NavLink to={'/home'} onClick={() => setVisibleModal(false)}
										 className={'bg-red-500 text-white py-3 px-10 rounded shadow-red-600'}>{superGameQuestions ? 'На главную' : 'Нет'}
								</NavLink>
							</div>


						</>

					)
				}


			</div>
		</div>

	)
}

export default WinModal