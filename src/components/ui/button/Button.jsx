import cn from 'clsx'

import s from './Button.module.scss'

export const Button = props => {
	const { children, className, variant = 'border', ...rest } = props

	const rootCn = cn(s.button, s[variant], className)

	return (
		<button
			className={rootCn}
			{...rest}
		>
			{children}
		</button>
	)
}
