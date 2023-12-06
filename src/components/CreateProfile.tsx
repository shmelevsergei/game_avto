import { FC } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { instance } from '../api/api.axios.ts'
import { toast } from 'react-toastify'


export const createProfileAction = async ({ request }: any) => {

	const formData = await request.formData()
	const profile = {
		name: formData.get('name'),
		surname: formData.get('surname'),
		city: formData.get('city'),
		phone: formData.get('phone'),
		station: formData.get('station')
	}

	try {
		await instance.post(`/persons`, profile)
		toast.success('Профиль создан!')

		return profile
	} catch (error) {
		toast.error('Произошла ошибка при создании профиля')
		return error
	}
}


const CreateProfile: FC = () => {
	const navigate = useNavigate()
	return (
		<div className={'flex justify-center items-center h-full flex-col gap-10'}>
			<p className={'text-3xl'}>Для начал игры создайте профиль!</p>
			<Form method={'post'} action={'/createProfile'}>
				<div className={'flex justify-center flex-wrap gap-5 max-w-[600px]'}>
					<div>
						<p>Имя</p>
						<input type='text' name={'name'} placeholder={'Имя...'} required
							   className={'input input-form'} />
					</div>

					<div>
						<p>Фамилия</p>
						<input type='text' name={'surname'} placeholder={'Фамилия...'} required
							   className={'input input-form'} />
					</div>

					<div>
						<p>Город</p>
						<input type='text' name={'city'} placeholder={'Город...'} required
							   className={'input input-form'} />
					</div>

					<div>
						<p>Телефон</p>
						<input type='tel' name={'phone'} placeholder={'Телефон...'} required
							   className={'input input-form'} />
					</div>

					<div>
						<p>Станция</p>
						<input type='text' name={'station'} placeholder={'Станция...'} required
							   className={'input input-form'} />
					</div>
				</div>

				<div className={'mt-10 flex justify-center'}>
					<button
						type={'submit'}
						className='btn btn-blue'
						onClick={() =>
							setTimeout(() => {
								navigate('/profile')
							}, 2000)}
					>
						Создать
					</button>
				</div>
			</Form>
		</div>
	)
}

export default CreateProfile