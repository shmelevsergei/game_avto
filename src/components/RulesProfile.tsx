import { BsPatchQuestion } from 'react-icons/bs'
import { GrSchedules } from 'react-icons/gr'
import { MdOutlineTimer } from 'react-icons/md'
import { FC } from 'react'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { SiRiotgames } from 'react-icons/si'

const RulesProfile: FC = () => {
	return (
		<div className={'flex flex-col items-center gap-8'}>

			<div className={'flex justify-center items-start gap-5 text-xs max-w-[900px] flex-wrap text-slate-800'}>
				<div className={'text-center  flex flex-col items-center gap-5 max-w-[140px] '}>
					<BsPatchQuestion size={30} />
					В игре 30 вопросов разной сложности и лишь два права на ошибку.
				</div>

				<div className={'text-center flex flex-col items-center gap-5 max-w-[140px]'}>
					<GrSchedules size={30} />
					Зарабатывайте баллы и поднимайтесь в рейтинге. У вас есть 1 игра в неделю!

				</div>

				<div className={'text-center flex flex-col items-center gap-5 max-w-[140px]'}>
					<MdOutlineTimer size={30} />
					На ответ – 10 секунд 1 миллисекунда = 1 балл. Успевайте!
				</div>

				<div className={'text-center  flex flex-col items-center gap-5 max-w-[140px]'}>
					<IoSpeedometerOutline size={30} />
					Ответили на все 30 вопросов? Для вас приготовили сложнейшую СУПЕРИГРУ.
				</div>

				<div className={'text-center flex flex-col items-center gap-5 max-w-[140px]'}>
					<SiRiotgames size={30} />
					Лучшие 20 в рейтинге получают призы и подарки от GROUPAUTO.

				</div>
			</div>

		</div>
	)
}

export default RulesProfile