import Skeleton from 'react-loading-skeleton'

import s from './ForecastCard.module.sass'

export const ForecastCardSkeleton = () => {
	return (
		<div className={s.forecastCard}>
			<Skeleton
				height={10}
				width={56}
			/>
			<Skeleton
				height={18}
				width={28}
			/>
			<Skeleton
				height={10}
				width={56}
			/>
			<Skeleton
				circle
				width={60}
				height={60}
			/>
			<Skeleton
				height={8}
				width={20}
			/>
		</div>
	)
}
