import { instance } from '../api/api.axios.ts'
import { IProfile } from '../types/types.ts'

export const personLoader = async () => {
	try {
		const userIdLocalstorage = localStorage.getItem('userId')

		if (userIdLocalstorage) {
			const userId = JSON.parse(userIdLocalstorage)

			const profile = await instance.get<IProfile>(`/persons/${+userId}`)

			const data = { profile: profile.data }

			return data
		}
	} catch (error) {

		return { error: true }
	}
}