import axios from 'axios'
import { getTokenFromLocalstorage } from '../helpers/localstorage.helper.ts'

const createAxiosInstance = () => {
	const instance = axios.create({
		baseURL: 'http://178.253.42.38:3002/api'
		// baseURL: 'http://localhost:3001/api'
	})

	instance.interceptors.request.use(
		(config) => {
			const token = getTokenFromLocalstorage('token')
			if (token) {
				config.headers.Authorization = `Bearer ${token} ` || ''
			}
			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)

	return instance
}

// Используйте функцию для создания экземпляра Axios
export const instance = createAxiosInstance()