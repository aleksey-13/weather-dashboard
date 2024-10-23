import cn from 'clsx'

import s from './Loader.module.sass'

export const Loader = ({ className }) => {
	const rootCn = cn(s.loader, className)

	return (
		<div className={rootCn}>
			<div />
			<div />
		</div>
	)
}
