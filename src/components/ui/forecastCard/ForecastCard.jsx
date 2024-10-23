import cn from 'clsx'
import Image from 'next/image'
import { memo } from 'react'

import { Typography } from '../typography/Typography'

import s from './ForecastCard.module.sass'

export const ForecastCard = memo(props => {
	const { className, data, ...rest } = props
	const { day, month, dayOfWeek, weatherIconAlt, weatherIconSrc, temperature } =
		data

	const rootCn = cn(s.forecastCard, className)

	return (
		<div
			className={rootCn}
			{...rest}
		>
			<Typography>{dayOfWeek}</Typography>
			<Typography size={24}>{day}</Typography>
			<Typography>{month}</Typography>

			<Image
				className={s.icon}
				src={weatherIconSrc}
				width='60'
				height='60'
				alt={weatherIconAlt}
			/>

			<Typography
				size={18}
				weight={600}
			>
				{temperature}°
			</Typography>
		</div>
	)
})
