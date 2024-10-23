import Skeleton from 'react-loading-skeleton'

import s from './WeatherStatus.module.sass'

export const WeatherStatusSkeleton = () => {
	return (
		<>
			<Skeleton
				circle
				width={120}
				height={120}
			/>
			<Skeleton
				width={110}
				height={80}
			/>

			<ul className={s.statusList}>
				<Skeleton
					containerClassName={s.statusItem}
					height={10}
					width={100}
				/>
				<Skeleton
					containerClassName={s.statusItem}
					height={10}
					width={100}
				/>
				<Skeleton
					containerClassName={s.statusItem}
					height={10}
					width={100}
				/>
				<Skeleton
					containerClassName={s.statusItem}
					height={10}
					width={100}
				/>
			</ul>
		</>
	)
}
