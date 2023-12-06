export const getTokenFromLocalstorage = (key: string): string => {
	const data = localStorage.getItem(key)

	const token: string = data ? JSON.parse(data) : ''

	return token
}


export const setTokenToLocalstorage = (key: string, token: string) => {
	localStorage.setItem(key, JSON.stringify(token))
}


export const removeTokenFromLocalstorage = (key: string) => {
	localStorage.removeItem(key)
}
