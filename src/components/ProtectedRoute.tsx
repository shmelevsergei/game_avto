import { FC, JSX } from 'react'
import { useAuth } from '../hooks/useAuth.ts'

interface Props {
	children: JSX.Element
}

const ProtectedRoute: FC<Props> = ({ children }) => {
	const isAuth = useAuth()
	return <>
		{isAuth ? children :
			<div className={`flex flex-col justify-center items-center max-w-[600px] px-4 h-full mx-auto`}>
				<h1 className={`text-2xl text-center`}>Для посещения этой страницы необходимо зарегистироваться или
					войти!</h1>

			</div>}
	</>
}

export default ProtectedRoute