import { FC, useEffect, useMemo, useState } from 'react'

import { IQuestion, IResponseProfile, IResponseQuestions } from '../../types/types.ts'
import { useLoaderData } from 'react-router-dom'
import WinModal from '../../components/WinModal.tsx'
import LoseModal from '../../components/LoseModal.tsx'
import { questionLoader } from '../../helpers/questionLoader.helper.ts'
import { personLoader } from '../../helpers/personLoader.helper.ts'
import UserInfo from '../../components/UserInfo.tsx'
import { instance } from '../../api/api.axios.ts'
import NextQuestion from '../../components/NextQuestion.tsx'
import LifePlayer from '../../components/LifePlayer.tsx'
import LifeTimer from '../../components/LifeTimer.tsx'
import BaseGame from '../../components/BaseGame.tsx'


type RatingUpdate = {
	value: number
	person: number | undefined
}

type RatingAction = {
	value: number | null
	person: number | undefined
}

type FilteredQuestions = {
	easy?: IQuestion[]
	normal?: IQuestion[]
	hard?: IQuestion[]
	superGame?: IQuestion[]
}


export const gameLoader = async () => {
	const questionData = await questionLoader()
	const personData = await personLoader()

	return { ...questionData, ...personData }
}

const ratingAction = async ({ value, person }: RatingAction) => {
	const data = {
		value: value,
		person: person
	}

	await instance.post('/rating', data)
	return null
}

export const renderLifeIcon = (count: number) => {
	const icons = []
	for (let i = 0; i < count; i++) {
		icons.push(<LifePlayer key={i} />)
	}
	return icons
}
const Game: FC = () => {
	const { questions } = useLoaderData() as IResponseQuestions
	const { profile } = useLoaderData() as IResponseProfile
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
	const [isCorrectAnswer, setIsCorrectAnswer] = useState(0)
	const [isOpenWinModal, setIsOpenWinModal] = useState(false)
	const [isOpenLoseModal, setIsOpenLoseModal] = useState(false)
	const [isDisabled, setIsDisabled] = useState(false)
	const [newRating, setNewRating] = useState('0')
	const [timerStart, setTimerStart] = useState(true)
	const [timerValue, setTimerValue] = useState<string>('')
	const [life, setLife] = useState(1)
	const [isVisible, setIsVisible] = useState(true)
	const [nextQuestion, setNextQuestion] = useState(false)
	const [questionsGame, setQuestionsGame] = useState<IQuestion[]>([])
	const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)

	const [isSuperGame, setIsSuperGame] = useState(false)


	const handleTimerUpdate = (value: string) => {
		setTimerValue(value)
	}

	const baseQuestionsGame = useMemo(() => {
		const filteredQuestions: FilteredQuestions = { ...questions }
		if (filteredQuestions.superGame) delete filteredQuestions.superGame

		return Object.values(filteredQuestions).flat()
	}, [questions])

	useEffect(() => {
		if (!isSuperGame) {
			setQuestionsGame(baseQuestionsGame)
		} else {
			setQuestionsGame(superQuestionsGame)
		}

	}, [isSuperGame])

	const superQuestionsGame = useMemo(() => {
		return questions.superGame
	}, [questions.superGame])


	const handleAnswerClick = async (variantIndex: number) => {

		setIsDisabled(true)
		setTimerStart(false)
		const currentQuestionData = questionsGame[currentQuestion]
		const currentAnswer = `variant_${variantIndex}` === currentQuestionData?.variant

		if (currentAnswer) {
			setIsCorrectAnswer(1)
			setNewRating(newRating => (Math.floor(+newRating + (+timerValue * 1000))).toString())
			setNewQuestion()
			setIsOpenWinModal(true)

		} else {
			const updateLife = life - 1
			setLife(updateLife >= 0 ? updateLife : 0)
			setIsCorrectAnswer(2)
			setIsOpenLoseModal(true)

			if (updateLife >= 0) {
				setNextQuestion(true)
				setNewQuestion()
			} else {
				setNextQuestion(false)
			}
		}

		setSelectedAnswer(variantIndex)

	}

	const setNewQuestion = () => {

		if (timerId) {
			clearTimeout(timerId)
		}

		const newTimerId = setTimeout(async () => {
			if (currentQuestion + 1 < questionsGame.length) {
				setCurrentQuestion((prevQuestion) => prevQuestion + 1)
				// Сброс выбранного ответа
				setIsCorrectAnswer(0)
				setSelectedAnswer(null)
				setIsDisabled(false)
				setTimerStart(true)
			}
		}, 3000)
		setTimerId(newTimerId)
	}

	useEffect(() => {
		if (timerValue == '0.000') {

			setNextQuestion(false)
			setIsOpenLoseModal(true)
		}
	}, [timerValue])


	useEffect(() => {
		if (profile?.ratings) {
			ratingUpdate()
		}
	}, [newRating, profile])

	async function ratingUpdate() {
		const ratingUpdate: RatingUpdate = {
			value: +newRating,
			person: profile?.id
		}
		await ratingAction(ratingUpdate)
	}


	return (
		<>
			<div className={'w-full flex mt-20 justify-center px-4'}>
				{questionsGame.length ? (


					<div className={'flex flex-col gap-5 text-sm'}>
						<div className={'flex justify-between gap-3'}>
							<LifeTimer renderLifeIcon={renderLifeIcon} life={life} timerStart={timerStart && !isVisible}
									   handleTimerUpdate={handleTimerUpdate} />

							<UserInfo username={profile?.name} currentRatings={profile?.ratings}
									  newRating={+newRating} />

						</div>

						{
							isSuperGame ? (
								isVisible ? <NextQuestion text={`Супер игра начнётся через:`}
														  setVisibleModal={setIsVisible}
														  setIsVisible={setIsVisible}
														  isVisible={isVisible} /> :

									<BaseGame currentQuestion={currentQuestion}
											  baseQuestionsGame={superQuestionsGame}
											  isDisabled={isDisabled} selectedAnswer={selectedAnswer}
											  isCorrectAnswer={isCorrectAnswer}
											  handleAnswerClick={handleAnswerClick} />


							) : (
								isVisible ? <NextQuestion text={`Игра начнётся через:`}
														  setVisibleModal={setIsVisible}
														  setIsVisible={setIsVisible}
														  isVisible={isVisible} /> :
									<BaseGame currentQuestion={currentQuestion} baseQuestionsGame={baseQuestionsGame}
											  isDisabled={isDisabled} selectedAnswer={selectedAnswer}
											  isCorrectAnswer={isCorrectAnswer}
											  handleAnswerClick={handleAnswerClick} />)
						}

					</div>


				) : (
					<div>
						<h2 className={'text-3xl text-center'}>Вопросов пока нет!</h2>
					</div>
				)}

			</div>

			{isOpenWinModal &&
				<WinModal setVisibleModal={setIsOpenWinModal}
						  question={currentQuestion + 1 < questionsGame.length}
						  superGameQuestions={(currentQuestion + 1 === superQuestionsGame.length) && isSuperGame}
						  visibleModal={isOpenWinModal} currentRating={+newRating}
						  isStartSuperGame={() => {
							  setCurrentQuestion(0)
							  setIsSuperGame(true)
							  setIsCorrectAnswer(0)
							  setSelectedAnswer(null)
							  setIsDisabled(false)
							  setTimerStart(true)
							  setIsVisible(true)
						  }}
				/>
			}

			{isOpenLoseModal &&
				<LoseModal setVisibleModal={setIsOpenLoseModal} life={life} isNextQuestion={nextQuestion} />
			}
		</>


	)
}

export default Game

