// export const formatDate = (dateString: string): string => {
// 	const date = new Date(dateString)
//
// 	const option = {
// 		year: 'numeric',
// 		month: 'long',
// 		day: 'numeric'
// 	}
// 	return date.toLocaleDateString('ru-RU', option)
// }

export const formatDateNumber = <T extends string[]>(dates: T): string => {
	const currentDate = new Date()
	const closestDate = dates.reduce(
		(closest, date) => {
			const dateObj = new Date(date)
			const timeDifference = Math.abs(
				dateObj.getTime() - currentDate.getTime()
			)

			if (timeDifference < closest.timeDifference) {
				return { dateObj, timeDifference }
			} else {
				return closest
			}
		},
		{
			dateObj: new Date(dates[0]),
			timeDifference: Math.abs(
				new Date(dates[0]).getTime() - currentDate.getTime()
			)
		}
	)

	const date = new Date(closestDate.dateObj)

	const day = date.getDate().toString().padStart(2, '0')
	const month = (date.getMonth() + 1).toString().padStart(2, '0')
	const year = date.getFullYear().toString().slice(-2)

	return `${day}.${month}.${year}`
}

//const lastDate = arr.reduce((maxDate, currentDate) => {
// 		return new Date(currentDate) > new Date(maxDate) ? currentDate : maxDate
// 	}, arr[0])
//
// 	const formattedDate = new Date(lastDate).toLocaleDateString('ru-RU')
//
// 	// Преобразуйте число обратно в формат даты
// 	return new Date(formattedDate)
