import { useDispatch, useSelector } from 'react-redux'

import { FAVORITE_CITIES_KEY } from '@/constans/common.constans'

import { setCities } from '@/store/slices/favoriteCitiesSlice'

import { storage } from '@/utils'

export const useStorageCity = () => {
	const dispatch = useDispatch()

	const cities = useSelector(state => state.favoriteCities.cities)

	const addNewCity = cityName => {
		if (cities && cities.includes(cityName)) return

		const updatedCities = [cityName, ...cities]

		dispatch(setCities(updatedCities))
		storage(FAVORITE_CITIES_KEY, updatedCities)
	}

	return { addNewCity }
}
