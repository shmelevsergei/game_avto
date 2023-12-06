import { FC, ReactNode } from 'react'
import { IQuestion } from '../types/types'


interface BaseGameProps {
	currentQuestion: number;
	baseQuestionsGame: IQuestion[];
	isDisabled: boolean;
	selectedAnswer: number | null;
	isCorrectAnswer: number;
	handleAnswerClick: (variantIndex: number) => void;
}

const BaseGame: FC<BaseGameProps> = ({
										 currentQuestion,
										 baseQuestionsGame,
										 isDisabled,
										 selectedAnswer,
										 isCorrectAnswer,
										 handleAnswerClick
									 }) => {
	return (
		<div className={'flex flex-col max-w-[900px] text-center'}>
			<p className={'text-xl font-bold'}>Вопрос
				№{currentQuestion + 1}/{baseQuestionsGame.length}</p>
			<div className={'flex flex-col items-center gap-5 mt-5'}>
				<p className={'text-base bg-slate-200 border-4 border-black rounded-[10px] py-3 px-7 text-slate-800'}>{baseQuestionsGame[currentQuestion].question}</p>
				{baseQuestionsGame[currentQuestion].link && (
					<img src={baseQuestionsGame[currentQuestion].link} alt='img'
						 className={' max-w-[50%] lg:max-w-[40%]'} />
				)}

			</div>


			<div className={'mt-7'}>
				<p className={'text-2xl font-semibold'}>Варианты ответа:</p>
				<div
					className={'flex flex-wrap gap-4 items-center justify-center mt-3'}>
					{[1, 2, 3, 4, 5].map((variantIndex) => (
						<button
							disabled={isDisabled}
							key={variantIndex}
							className={`py-2 px-5 rounded text-base lg:text-xl border-[2px] bg-blue-500  border-blue-600 text-white font-medium shadow-slate-700 hover:-translate-y-2 transition-all ${
								selectedAnswer === variantIndex
									? isCorrectAnswer === 1
										? 'bg-green-700' // верный ответ, класс 'bg-green'
										: 'bg-red-600' // неверный ответ, класс 'bg-red'
									: ''
							}`}
							onClick={() => handleAnswerClick(variantIndex)}
						>
							{baseQuestionsGame[currentQuestion][`variant_${variantIndex}` as keyof IQuestion] as ReactNode}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default BaseGame