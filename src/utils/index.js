import { CONSTANT_VALUE_KELVIN } from '@/constans/common.constans'

export const parseDate = date => {
	const currentDate = new Date(date * 1000)

	const dayOfWeek = currentDate.toLocaleString('EN', { weekday: 'long' })
	const month = currentDate.toLocaleString('EN', { month: 'long' })
	const day = currentDate.getDate()

	return {
		dayOfWeek,
		day,
		month
	}
}

export const k2c = k => {
	return Math.floor(k - CONSTANT_VALUE_KELVIN)
}

export const storage = (key, data) => {
	if (data) {
		localStorage.setItem(key, JSON.stringify(data))

		return
	}

	return JSON.parse(localStorage.getItem(key))
}

export const isEmpty = arr => !arr.length
