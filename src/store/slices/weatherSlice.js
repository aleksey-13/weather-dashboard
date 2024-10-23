import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	weatherStatus: null,
	weeklyForecast: null
}

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setWeatherStatus: (state, action) => {
			state.weatherStatus = action.payload
		},
		setWeeklyForecast: (state, action) => {
			state.weeklyForecast = action.payload
		}
	}
})

export const { setWeatherStatus, setWeeklyForecast } = weatherSlice.actions

export default weatherSlice.reducer
