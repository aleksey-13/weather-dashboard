import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cities: [],
	currentCity: null
}

const favoriteCitiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		setCities: (state, action) => {
			state.cities = action.payload
		},
		setCurrentCity: (state, action) => {
			state.currentCity = action.payload
		}
	}
})

export const { setCities, setCurrentCity } = favoriteCitiesSlice.actions

export default favoriteCitiesSlice.reducer
