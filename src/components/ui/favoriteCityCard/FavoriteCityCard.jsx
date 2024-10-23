import cn from 'clsx'
import { memo } from 'react'

import CrossIcon from '@/assets/icons/cross.svg'

import { Typography } from '../typography/Typography'

import s from './FavoriteCityCard.module.sass'

export const FavoriteCityCard = memo(props => {
	const { className, city, onClickHandler, onDeleteHandler, active, ...rest } =
		props

	const rootCn = cn(s.favoriteCityCard, className, { [s.active]: active })

	return (
		<div
			className={rootCn}
			onClick={onClickHandler}
			{...rest}
		>
			<Typography
				size={24}
				tag='span'
			>
				{city}
			</Typography>

			<button
				className={s.deleteButton}
				type='button'
				aria-label='Delete favorite city button'
				onClick={onDeleteHandler}
			>
				<CrossIcon className={s.deleteButtonIcon} />
			</button>
		</div>
	)
})
