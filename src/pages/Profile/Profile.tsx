import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { instance } from '../../api/api.axios.ts'
import { NavLink, useLoaderData } from 'react-router-dom'
import { IProfile, IResponseProfile } from '../../types/types.ts'
import ProfileModal from '../../components/ProfileModal.tsx'
import { toast } from 'react-toastify'
import RulesProfile from '../../components/RulesProfile.tsx'

export const profileLoader = async () => {
	try {
		const userIdLocalstorage = localStorage.getItem('userId')

		if (userIdLocalstorage) {
			const userId = JSON.parse(userIdLocalstorage)

			const profile = await instance.get<IProfile>(`/persons/${+userId}`)

			const data = { profile: profile.data }

			return data
		}
	} catch (error) {

		return { error: true }
	}
}
export const profileAction = async ({ request }: any) => {
	const formData = await request.formData()
	const profile = {
		id: formData.get('id'),
		name: formData.get('name'),
		surname: formData.get('surname'),
		city: formData.get('city'),
		phone: formData.get('phone'),
		station: formData.get('station')
	}

	await instance.patch(`/persons/${profile.id}`, profile)
	toast.success('Профиль обновлён!')
	return profile

}

const Profile: FC = () => {
	const { profile, error } = useLoaderData() as IResponseProfile

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const [profileId, setProfileId] = useState<number>(0)


	useEffect(() => {
		if (error || !profile) {
			setProfileId(0) // Обнуление profileId при ошибке или отсутствии профиля
		}
	}, [error, profile])

	return <div className={'pt-32 flex container justify-center pb-10'}>

		{error ? (
			<div className={'flex flex-col gap-10 items-center w-full'}>
				<h2 className={'text-xl lg:text-2xl text-center'}>Профиль еще не создан. Для начала игры необходимо
					создать профиль
					игрока.</h2>
				<NavLink to={'/createProfile'} className={'btn btn-blue w-max'}>Создать профиль
				</NavLink>
			</div>
		) : profile &&
			(
				<div className={'flex flex-col gap-8 '}>


					<div
						className={`text-2xl justify-between gap-6 flex flex-wrap  border-2 border-gray-600 rounded-xl shadow-xl px-8 py-10 bg-slate-300 text-slate-900 font-medium`}>

						<div>
							<div>
								<span> Имя: </span>
								<span
									className={`text-slate-800 font-normal text-lg`}>{profile.name} </span>
							</div>
							<div>
								<span>Фамилия: </span>
								<span
									className={`text-slate-800 font-normal text-lg`}>{profile.surname}</span>
							</div>
						</div>

						<div>
							<div>
								<span>Email: </span>
								<span
									className={`text-slate-800 font-normal text-lg`}>{profile.email}</span>
							</div>
							<div>
								<span>Телефон: </span>
								<span
									className={`text-slate-800 font-normal text-lg`}>{profile.phone}</span>
							</div>
						</div>

						<div>
							<div>
								<span>Город: </span>
								<span
									className={`text-slate-800 font-normal text-lg`}>{profile.city}</span>
							</div>
							<div>
								<span>Станция: </span>
								<span
									className={`text-slate-800 font-normal text-lg`}>{profile.station}</span>
							</div>
						</div>

						<div>
							<Button variant='contained' onClick={() => {
								setIsOpen(true)
								setProfileId(profile?.id)
							}}>Редактировать профиль</Button>
						</div>

					</div>

					<div className={'flex flex-col gap-5 lg:flex-row'}>

						<NavLink to={'/game'}
								 className={'lg:order-2 mt-auto w-[300px] py-3 h-full mx-auto bg-blue-800 border border-blue-700 rounded-xl hover:scale-105 shadow transition-all flex items-center justify-center text-slate-50 font-bold text-5xl'}>ИГРАТЬ</NavLink>

						<div className={'flex flex-col lg:order-1'}>
							<RulesProfile />
							<NavLink to={'/rules'}
									 className={'py-2 px-10 max-w-max mx-auto mt-5 rounded-[5px] bg-blue-500 text-xl transition-all text-center shadow hover:shadow-xl text-slate-100 uppercase'}>Подробнее</NavLink>
						</div>


					</div>
				</div>


			)
		}

		{isOpen && (
			<ProfileModal setVisibleModal={setIsOpen} id={profileId} />
		)}


	</div>
}

export default Profile
