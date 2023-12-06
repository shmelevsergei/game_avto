import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaRegArrowAltCircleLeft, FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../hooks/useAuth.ts'
import { useAppDispatch } from '../store/hooks.ts'
import { logout } from '../store/user/userSlice.ts'
import { removeTokenFromLocalstorage } from '../helpers/localstorage.helper.ts'
import { toast } from 'react-toastify'

const Header: FC = () => {
	const isAuth = useAuth()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const logoutHandler = () => {
		removeTokenFromLocalstorage('token')
		localStorage.removeItem('userId')
		dispatch(logout())
		toast.success('Вы вышли из системы')
		navigate('/')
	}

	return (
		<header
			className={`relative top-0 left-0 right-0 w-full shadow-sm backdrop-blur-sm z-20`}
		>
			<div className={'container flex justify-between items-center p-4 '}>
				<Link to={'/home'} className={`flex items-center gap-1 mr-auto`}>
					<img src='/logo_academy.png' alt='кармастер' className={'h-10 w-max'} />
				</Link>

				{isAuth && (
					<div className={'flex gap-5 items-center'}>
						<NavLink to={'/home'}
								 className={'group text-xl hover:underline   w-max flex items-center gap-3'}><span
							className={'group-hover:-translate-x-1 transition-all'}><FaRegArrowAltCircleLeft /></span>
							<span className={'hidden sm:block'}>На
							главную</span> </NavLink>
						<button className={'btn btn-blue'} onClick={logoutHandler}><span
							className={'hidden sm:block'}>Выйти</span>
							<FaSignOutAlt />
						</button>
					</div>

				)
					// 	: (
					// 	<Link
					// 		to={'/'}
					// 		className={`text-xl underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit`}
					// 	>
					// 		{' '}
					// 		Вход / Регистрация{' '}
					// 	</Link>
					// )
				}
			</div>

		</header>
	)
}

export default Header
