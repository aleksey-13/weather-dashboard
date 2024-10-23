import cn from 'clsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DEFAULT_CITY, FAVORITE_CITIES_KEY } from '@/constans/common.constans'

import { setCities, setCurrentCity } from '@/store/slices/favoriteCitiesSlice'

import { useFetchWeather } from '@/hooks/useFetchWeather'

import { FavoriteCityCard } from '../ui/favoriteCityCard/FavoriteCityCard'

import s from './FavoriteCitiesList.module.sass'
import { isEmpty, storage } from '@/utils'

export const FavoriteCitiesList = props => {
	const { className, ...rest } = props

	const rootCn = cn(s.favoriteCitiesList, className)

	const dispatch = useDispatch()
	const cities = useSelector(state => state.favoriteCities.cities)
	const currentCity = useSelector(state => state.favoriteCities.currentCity)

	const { fetchWeather } = useFetchWeather()

	useEffect(() => {
		const storagedCities = storage(FAVORITE_CITIES_KEY)

		if (!storagedCities || isEmpty(storagedCities)) {
			fetchWeather(DEFAULT_CITY)
		} else {
			fetchWeather(storagedCities[0])
			dispatch(setCurrentCity(storagedCities[0]))
			dispatch(setCities(storagedCities))
		}
	}, [])

	const deleteCity = (e, city) => {
		e.stopPropagation()

		const updatedCities = cities.filter(c => c !== city)

		dispatch(setCities(updatedCities))
		storage(FAVORITE_CITIES_KEY, updatedCities)
	}

	const selectCity = city => {
		if (city === currentCity) return

		fetchWeather(city)
		dispatch(setCurrentCity(city))
	}

	const renderFavoriteCities = cities?.map(city => (
		<li key={city}>
			<FavoriteCityCard
				city={city}
				active={city === currentCity}
				onClickHandler={() => selectCity(city)}
				onDeleteHandler={e => deleteCity(e, city)}
			/>
		</li>
	))

	return (
		<ul
			className={rootCn}
			{...rest}
		>
			{renderFavoriteCities}
		</ul>
	)
}
