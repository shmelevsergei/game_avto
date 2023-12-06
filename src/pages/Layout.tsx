import { FC, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header.tsx'


const Layout: FC = () => {
	const [isShowBanner, setIsShowBanner] = useState(true)

	useEffect(() => {
		if (isShowBanner) {
			setTimeout(() => {
				setIsShowBanner(false)

			}, 3000)
		}
	}, [isShowBanner])

	return (

		<div
			className={`relative min-h-screen flex flex-col overflow-auto bg-[url('/public/global_bg.webp')] bg-center bg-cover bg-no-repeat`}>
			<div className={'h-full'}>
				<div className={`relative ${isShowBanner ? 'opacity-0 invisible' : 'opacity-1  visible'}`}>
					<Header />
				</div>

				<div
					className={`relative w-full top-0 bottom-0 bg-[url('/public/global_bg.webp')] bg-center bg-cover bg-no-repeat h-full z-20 flex items-center justify-center transition-all duration-300 ${
						isShowBanner ? 'opacity-1  visible' : 'opacity-0 invisible'
					} `}>

					<img src='/logos_bg.webp' alt='img' className={'w-full'} />
				</div>


				<div className={` ${isShowBanner ? 'opacity-0 invisible' : 'opacity-1  visible'}`}>
					<div className={'absolute top-0 left-0 bottom-0 right-0 z-10'}>
						<Outlet />
					</div>
				</div>
			</div>

		</div>

	)
}

export default Layout
