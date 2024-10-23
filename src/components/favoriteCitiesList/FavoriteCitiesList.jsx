import cn from 'clsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'

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

		// If LS is empty set default city to fetch current weather
		if (!storagedCities || isEmpty(storagedCities)) {
			fetchWeather(DEFAULT_CITY)
		} else {
			// If LS has a data. Set first city from the list and the fetch current weather
			fetchWeather(storagedCities[0])
			dispatch(setCities(storagedCities))
			dispatch(setCurrentCity(storagedCities[0]))
		}
	}, [])

	const deleteCity = (e, city) => {
		e.stopPropagation()

		const updatedCities = cities.filter(c => c !== city)

		// Update the favorite cities store after delete
		dispatch(setCities(updatedCities))
		storage(FAVORITE_CITIES_KEY, updatedCities)

		toast.success(`${city} city has been deleted`)
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
