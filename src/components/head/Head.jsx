import cn from 'clsx'
import { useSelector } from 'react-redux'

import { Typography } from '../ui/typography/Typography'

import s from './Head.module.sass'

const DEFAULT_TEXT = 'Dashboard weather'

export const Head = props => {
	const { className, ...rest } = props

	const rootCn = cn(s.head, className)

	const weatherStatus = useSelector(state => state.weather.weatherStatus)

	const renderContent = (
		<>
			<Typography>
				{weatherStatus?.month}, {weatherStatus?.day}
			</Typography>
			<Typography
				tag='h1'
				size={56}
				weight={600}
			>
				{weatherStatus?.cityName}
			</Typography>
		</>
	)

	const defaultContent = (
		<Typography
			tag='h1'
			size={48}
			weight={600}
		>
			{DEFAULT_TEXT}
		</Typography>
	)
	return (
		<div
			className={rootCn}
			{...rest}
		>
			{weatherStatus && renderContent}
			{!weatherStatus && defaultContent}
		</div>
	)
}
