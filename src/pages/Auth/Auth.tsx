import React, { FC, useEffect, useState } from 'react'
import { AuthService } from '../../services/auth.service.ts'
import { toast } from 'react-toastify'
import { setTokenToLocalstorage } from '../../helpers/localstorage.helper.ts'
import { useAppDispatch } from '../../store/hooks.ts'
import { login } from '../../store/user/userSlice.ts'
import { useNavigate } from 'react-router-dom'
import Title from '../../components/Title.tsx'
import { useAuth } from '../../hooks/useAuth.ts'


const Auth: FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLogin, setIsLogin] = useState(false)
	const dispatch = useAppDispatch()

	const navigate = useNavigate()
	const isAuthenticated = useAuth()


	const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = await AuthService.login({ email, password })

			if (data) {
				localStorage.setItem('userId', JSON.stringify(data.id))
				setTokenToLocalstorage('token', data.token)
				dispatch(login(data))
				toast.success('Вы вошли в аккаунт!')
				setTimeout(() => {
					navigate('/profile')
				}, 1500)
			}

		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}

	const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = await AuthService.registration({ email, password })

			if (data) {
				toast.success('Аккаунт успешно создан!')
				setIsLogin(!isLogin)

			}
		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}

	useEffect(() => {

		if (isAuthenticated) {
			navigate('/home')
		}
	}, [isAuthenticated])

	return <div className={`relative flex flex-col h-full mt-32 items-center px-4`}>

		<Title />
		<h2 className={'text-2xl text-center mb-10 uppercase'}>

			{
				isLogin ? 'Регистрация' : 'Вход'
			}
		</h2>
		<form onSubmit={isLogin ? registrationHandler : loginHandler}
			  className={`flex flex-col justify-center max-w-[450px] w-full gap-5`}>
			<input type='email' placeholder={'Email'} className={'input w-full'}
				   onChange={(e) => setEmail(e.target.value)} />
			<input type='password' placeholder={'Password'} className={'input w-full'}
				   onChange={(e) => setPassword(e.target.value)} />
			<button className={'btn btn-blue w-max mx-auto'}>Отправить</button>
		</form>

		<div className={'mt-10 cursor-pointer'} onClick={() => setIsLogin(!isLogin)}>
			{
				!isLogin ? 'Зарегистрировать аккаунт' : 'У меня есть аккаунт'
			}
		</div>

	</div>
}

export default Auth

