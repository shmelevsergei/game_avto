import { FC, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { IProfile } from '../../types/types.ts'
import { formatDateNumber } from '../../helpers/date.helper.ts'
import { instance } from '../../api/api.axios.ts'

type ResponseProfile = {
	persons: IProfile[]
}
export const ratingLoader = async () => {
	const persons = await instance.get<IProfile[]>('/persons')

	const data = { persons: persons.data }

	return data
}
const Rating: FC = () => {
	const { persons } = useLoaderData() as ResponseProfile

	const [sortedPersons, setSortedPersons] = useState<IProfile[]>([])

	useEffect(() => {
		if (persons) {
			// Создаем копию массива, чтобы избежать изменения исходного массива
			const sorted = [...persons]
			sorted.sort((a, b) => {
				// Сравниваем рейтинги для сортировки по убыванию
				const ratingA = a.ratings.reduce((max, rating) => {
					return rating.value > max ? rating.value : max
				}, 0)
				const ratingB = b.ratings.reduce((max, rating) => {
					return rating.value > max ? rating.value : max
				}, 0)
				return ratingB - ratingA
			})
			setSortedPersons(sorted)
		}
	}, [persons])

	return <div className='flex h-full justify-center mt-32'>
		<div className='overflow-x-auto sm:-mx-6 lg:-mx-8  text-slate-900 rounded-2xl pb-5'>
			<div className='inline-block min-w-full py-2 sm:px-6 lg:px-8 '>
				<div className='max-h-[500px] overflow-y-auto bg-gray-800 text-slate-200 rounded-xl'>
					{sortedPersons?.length ? (
						<table className='min-w-full text-left text-xl font-light '>
							<thead>
							<tr>
								<th scope='col' className='px-6 py-4'>
									#
								</th>
								<th scope='col' className='px-6 py-4'>
									Имя
								</th>
								<th scope='col' className='px-6 py-4'>
									Фамилия
								</th>
								<th scope='col' className='px-6 py-4'>
									Город
								</th>
								<th scope='col' className='px-6 py-4'>
									Станция
								</th>

								<th scope='col' className='px-6 py-4'>
									Рейтинг
								</th>
								<th scope='col' className='px-6 py-4'>
									Последняя игра
								</th>
							</tr>
							</thead>
							<tbody>
							{sortedPersons?.map((person, idx) => (
								<tr
									key={person.id}
									className='border-b first:text-yellow-500 first:text-2xl first:font-medium border-slate-600'
								>
									<td className='whitespace-nowrap px-6 py-4 font-medium'>
										{idx + 1}
									</td>
									<td className='whitespace-nowrap px-6 py-4'>
										{person.name}
									</td>
									<td className='whitespace-nowrap px-6 py-4'>
										{person.surname}
									</td>
									<td className='whitespace-nowrap px-6 py-4'>
										{person.city}
									</td>
									<td className='whitespace-nowrap px-6 py-4'>
										{person.station}
									</td>
									<td className='whitespace-nowrap px-6 py-4'>
										{person.ratings.reduce(
											(max, rating) => {
												return rating.value >
												max
													? rating.value
													: max
											},
											0
										)}
									</td>

									<td className='whitespace-nowrap px-6 py-4'>
										{person.ratings.length > 0
											? `${formatDateNumber(
												person.ratings.map(
													(rating) => {
														return rating.updatedAt
													}
												)
											)}`
											: 'Не играл'}
									</td>
								</tr>
							))}
							</tbody>
						</table>
					) : (
						<h2>Не зарегистрировано ни одного пользователя</h2>
					)}
				</div>
			</div>
		</div>
	</div>
}

export default Rating
