import cn from 'clsx'
import { useForm } from 'react-hook-form'

import SearchIcon from '@/assets/icons/search.svg'

import { useFetchWeather } from '@/hooks/useFetchWeather'
import { useStorageCity } from '@/hooks/useStorageCity'

import s from './SearchBar.module.sass'

export const SearchBar = props => {
	const { className, placeholder, ...rest } = props

	const rootCn = cn(s.searchBar, className)

	const { register, handleSubmit, reset } = useForm()

	const { addNewCity } = useStorageCity()
	const { fetchWeather } = useFetchWeather()

	const onSubmit = ({ cityName }) =>
		fetchWeather(cityName.trim())
			.then(responce => {
				// Save the current city into LS and Store
				addNewCity(responce.cityName)

				reset()
			})
			.catch(error => console.error(error))

	return (
		<form
			className={rootCn}
			onSubmit={handleSubmit(onSubmit)}
			{...rest}
		>
			<input
				className={s.searchInput}
				placeholder={placeholder}
				type='text'
				name='City name'
				{...register('cityName', {
					required: 'Field is required!'
				})}
			/>

			<button
				className={s.searchButton}
				aria-label='Search button'
			>
				Search
				<SearchIcon className={s.searchButtonIcon} />
			</button>
		</form>
	)
}
