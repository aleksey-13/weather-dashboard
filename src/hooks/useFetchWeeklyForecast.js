import { useDispatch } from 'react-redux'

import { setWeeklyForecast } from '@/store/slices/weatherSlice'

import { errorCatch } from '@/api/error'

import { weatherService } from '@/services/weather.service'

export const useFetchWeeklyForecast = () => {
	const dispatch = useDispatch()

	const fetchWeeklyForecast = async id => {
		return weatherService
			.getWeeklyForecast(id)
			.then(responce => {
				dispatch(setWeeklyForecast(responce))

				return responce
			})
			.catch(errorCatch)
	}

	return { fetchWeeklyForecast }
}
