import { FC } from 'react'
import titleImg from '/public/logo.png'

const Title: FC = () => {
	return (
		<h1 className={'text-[100px] leading-[100%] mt-0 max-w-[600px] mx-auto flex h-32'}>

			<img src={titleImg} alt='img' className={'h-full'} />
		</h1>
	)
}

export default Title