import { instance } from '../api/api.axios.ts'
import { IResponseQuestions } from '../types/types.ts'

export const questionLoader = async () => {
	const questions = await instance.get<IResponseQuestions>('/questions/sorted-list')

	const data = { questions: questions.data }

	return data

}