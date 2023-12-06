import { FC } from 'react'
import { IRating } from '../types/types.ts'

type UserInfo = {
	username: string | undefined
	currentRatings: IRating[] | undefined
	newRating: number
}
const UserInfo: FC<UserInfo> = ({ username, currentRatings, newRating }) => {
	return (
		<div className={'ml-auto bg-slate-200 shadow-2xl rounded-xl p-3'}>
			<div className={'text-center'}>
				<p className={'font-bold'}>{username}</p>
				<p>Лучший результат: <span className={'text-green-600 font-bold'}>
				{
					currentRatings?.length ? (
						currentRatings.reduce((max, rating) => {
							return rating.value > max ? rating.value : max
						}, 0)
					) : (0)

				}
			</span></p>
				<p>Текущий результат: <span className={'font-bold'}>{newRating}</span></p>

			</div>
		</div>
	)
}

export default UserInfo