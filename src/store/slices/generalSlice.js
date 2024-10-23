import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false
}

const generalSlice = createSlice({
	name: 'general',
	initialState,
	reducers: {
		setLoading: state => {
			state.isLoading = true
		},
		stopSloading: state => {
			state.isLoading = false
		}
	}
})

export const { setLoading, stopSloading } = generalSlice.actions

export default generalSlice.reducer
