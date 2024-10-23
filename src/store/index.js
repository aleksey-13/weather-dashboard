import { configureStore } from '@reduxjs/toolkit'

import favoriteCitiesSlice from './slices/favoriteCitiesSlice'
import generalSlice from './slices/generalSlice'
import weatherSlice from './slices/weatherSlice'

export const store = configureStore({
	reducer: {
		weather: weatherSlice,
		favoriteCities: favoriteCitiesSlice,
		general: generalSlice
	}
})
