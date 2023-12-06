import { FC } from 'react'
import { Form } from 'react-router-dom'


interface ICreateProfileForm {
	setVisibleModal: (visible: boolean) => void
	id?: number
}

const ProfileModal: FC<ICreateProfileForm> = ({ setVisibleModal, id }) => {
	return (
		<div
			className={`absolute left-2/4 top-2/4 max-w-[900px] -translate-x-2/4 -translate-y-2/4 rounded bg-slate-900 p-5`}
		>
			<Form method={'patch'} action={`/profile`}>
				<div className={'grid grid-cols-2 gap-5 text-slate-200'}>
					<div className={`flex flex-col gap-2`}>
						<label className={`text-xl`}>Введите имя</label>
						<input
							type={'text'}
							required
							placeholder={`Имя`}
							className={`input input-form h-10 `}
							name={`name`}
						/>
						<input type={'hidden'} name={'id'} value={id} />

					</div>

					<div className={`flex flex-col gap-2`}>
						<label className={`text-xl`}>
							Введите фамилию
						</label>
						<input
							type={'text'}
							required
							placeholder={`Фамилия`}
							className={`input input-form h-10 `}
							name={`surname`}
						/>
					</div>

					<div className={` flex flex-col gap-2`}>
						<label className={`text-xl`}>
							Введите телефон
						</label>
						<input
							type={'tel'}
							required
							placeholder={`Телефон`}
							className={`input input-form  h-10 `}
							name={`phone`}
						/>
					</div>

					<div className={`flex flex-col gap-2`}>
						<label className={`text-xl`}>
							Введите город
						</label>
						<input
							type={'text'}
							required
							placeholder={`Город`}
							className={`input input-form h-10 `}
							name={`city`}
						/>
					</div>

					<div className={`flex flex-col gap-2`}>
						<label className={`text-xl`}>
							Введите станцию
						</label>
						<input
							type={'text'}
							required
							placeholder={`Станция`}
							className={`input input-form h-10 `}
							name={`station`}
						/>
					</div>
				</div>


				<div className={`mt-10 flex justify-center gap-5`}>
					<button
						type='submit'
						onClick={() => setTimeout(() => {
							setVisibleModal(false)
						})}
						className='btn btn-green'

					>
						Обновить

					</button>

					<button
						onClick={() => setVisibleModal(false)}
						className='btn btn-red'
					>
						Закрыть
					</button>
				</div>
			</Form>
		</div>
	)
}

export default ProfileModal
