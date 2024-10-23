import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setCurrentCity } from '@/store/slices/favoriteCitiesSlice'
import { setLoading, stopSloading } from '@/store/slices/generalSlice'
import { setWeatherStatus } from '@/store/slices/weatherSlice'

import { errorCatch } from '@/api/error'

import { weatherService } from '@/services/weather.service'

export const useFetchWeather = () => {
	const dispatch = useDispatch()

	let timer

	useEffect(() => clearTimeout(timer), [])

	const fetchWeather = async city => {
		dispatch(setLoading())

		return weatherService
			.getCurrentWeather(city)
			.then(responce => {
				dispatch(setWeatherStatus(responce))
				dispatch(setCurrentCity(responce.cityName))

				return responce
			})
			.catch(errorCatch)
			.finally(() => {
				timer = setTimeout(() => dispatch(stopSloading()), 250)
			})
	}

	return { fetchWeather }
}
