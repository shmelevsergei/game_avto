import { FC } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.ts'
import { IResponseProfile } from '../../types/types.ts'
import Title from '../../components/Title.tsx'

const Home: FC = () => {
	const isAuth = useAuth()
	const { profile } = useLoaderData() as IResponseProfile


	return <div
		className={'flex flex-col mt-32 items-center'}>
		{profile ? (
			<>
				<p className={'text-xl'}>Автомобильная викторина</p>
				<Title />

				<div className={'flex flex-col gap-5 text-2xl mt-0'}>

					<NavLink to={'/game'}
							 className={'w-[300px] h-[100px] bg-blue-800 border-[4px] border-blue-800 rounded-xl hover:scale-110 transition-all mb-5 flex items-center justify-center text-slate-50 font-bold text-3xl'}>ИГРАТЬ</NavLink>
					{isAuth && (
						<NavLink to={'/profile'}
								 className={'hover:shadow-xl rounded shadow text-center uppercase bg-blue-500 text-white font-medium py-1 px-2'}>Перейти
							в профиль</NavLink>
					)}
					<NavLink to={'/rating'}
							 className={'hover:shadow-xl rounded shadow text-center uppercase bg-blue-500 text-white font-medium py-1 px-2'}>Посмореть
						рейтинг</NavLink>
					<NavLink to={'/rules'}
							 className={'hover:shadow-xl rounded shadow text-center uppercase bg-blue-500 text-white font-medium py-1 px-2'}>Правила
						игры</NavLink>
				</div>
			</>
		) : (
			<>
				<p className={'text-xl'}>Автомобильная викторина</p>
				<Title />

				<p className={'my-5 max-w-[600px] text-center'}>Для начала игры необходимо создать профиль, а также вы
					можете
					ознакомиться с рейтингом участников</p>

				<div className={'flex flex-col gap-5 text-2xl mt-10 text-center uppercase'}>
					{isAuth && (
						<NavLink to={'/createProfile'} className={'btn btn-blue '}>Создать
							профиль</NavLink>
					)}
					<NavLink to={'/rating'} className={'btn btn-blue'}>Посмореть рейтинг</NavLink>
				</div>
			</>
		)}


	</div>
}

export default Home
