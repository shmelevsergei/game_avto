import { IProfile } from '../types/types.ts'
import { instance } from '../api/api.axios.ts'

export const ratingLoaderHelper = async () => {

	const persons = await instance.get<IProfile[]>('/persons')

	const data = { persons: persons.data }

	return data
}