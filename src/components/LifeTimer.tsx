import { FC } from 'react'
import Timer from './Timer.tsx'

interface LifeTimerProps {
	life: number;
	renderLifeIcon: (count: number) => React.ReactNode[];
	timerStart: boolean;
	handleTimerUpdate: (value: string) => void;
}

const LifeTimer: FC<LifeTimerProps> = ({ renderLifeIcon, life, timerStart, handleTimerUpdate }) => {
	return (
		<div className={'bg-slate-200 shadow-2xl rounded-xl p-3'}>
			<div className={'flex items-center '}>Осталось жизней: <span
				className={'ml-2 flex'}>{
				renderLifeIcon(life)
			}</span></div>
			<Timer start={timerStart} stop={!timerStart} onTimerUpdate={handleTimerUpdate} />

		</div>
	)
}

export default LifeTimer