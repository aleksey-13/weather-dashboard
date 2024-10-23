import cn from 'clsx'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useFetchWeeklyForecast } from '@/hooks/useFetchWeeklyForecast'

import { ForecastCard } from '../ui/forecastCard/ForecastCard'
import { ForecastCardSkeleton } from '../ui/forecastCard/ForecastCardSkeleton'

import s from './WeeklyForecast.module.sass'

export const WeeklyForecast = ({ className }) => {
	const weeklyForecast = useSelector(state => state.weather.weeklyForecast)
	const weatherStatus = useSelector(state => state.weather.weatherStatus)
	const isLoading = useSelector(state => state.general.isLoading)

	const rootCn = cn(s.weeklyForecast, className)

	const { fetchWeeklyForecast } = useFetchWeeklyForecast()

	// Update the weekly forecast when a city changed
	useEffect(() => {
		if (!weatherStatus) return

		fetchWeeklyForecast(weatherStatus.id)
	}, [weatherStatus])

	const renderSekeleton = [...Array(5)].map((_, idx) => (
		<ForecastCardSkeleton key={idx} />
	))

	const renderContent = weeklyForecast?.map(forecastItem => (
		<ForecastCard
			key={forecastItem.id}
			data={forecastItem}
		/>
	))

	return (
		<ul className={rootCn}>
			{/* If fetched data is empty or a request in proccess show Skeleton */}
			{(isLoading || !weeklyForecast) && renderSekeleton}

			{weeklyForecast && !isLoading && renderContent}
		</ul>
	)
}
