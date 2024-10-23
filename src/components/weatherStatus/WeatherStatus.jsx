import cn from 'clsx'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import { Typography } from '../ui/typography/Typography'

import s from './WeatherStatus.module.sass'
import { WeatherStatusSkeleton } from './WeatherStatusSkeleton'

export const WeatherStatus = props => {
	const { className, ...rest } = props

	const rootCn = cn(s.weatherStatus, className)

	const weatherStatus = useSelector(state => state.weather.weatherStatus)
	const isLoading = useSelector(state => state.general.isLoading)

	const renderContent = (
		<>
			<Image
				className={s.icon}
				src={weatherStatus?.weatherIconSrc}
				width='120'
				height='84'
				alt={weatherStatus?.weatherIconAlt}
			/>

			<Typography size={72}>{weatherStatus?.temperature}°</Typography>

			<ul className={s.statusList}>
				<li className={s.statusItem}>
					<Typography
						tag='span'
						size={14}
					>
						Humidity: {weatherStatus?.humidity}%
					</Typography>
				</li>
				<li className={s.statusItem}>
					<Typography
						tag='span'
						size={14}
					>
						Wind Speed: {weatherStatus?.windSpeed} MPH
					</Typography>
				</li>
				<li className={s.statusItem}>
					<Typography
						tag='span'
						size={14}
					>
						Pressure: {weatherStatus?.pressure}
					</Typography>
				</li>
				<li className={s.statusItem}>
					<Typography
						tag='span'
						size={14}
					>
						Feels like: {weatherStatus?.feelsLike}°
					</Typography>
				</li>
			</ul>
		</>
	)

	return (
		<div
			className={rootCn}
			{...rest}
		>
			{/* If fetched data is empty or a request in proccess show Skeleton */}
			{(!weatherStatus || isLoading) && <WeatherStatusSkeleton />}

			{weatherStatus && !isLoading && renderContent}
		</div>
	)
}
