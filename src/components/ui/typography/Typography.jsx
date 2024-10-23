import cn from 'clsx'

import s from './Typography.module.sass'

export const Typography = props => {
	const {
		className,
		size = 16,
		weight = 400,
		children,
		tag = 'p',
		...rest
	} = props

	const rootCn = cn(
		s.typography,
		s[`typography-size-${size}`],
		s[`typography-weight-${weight}`],
		className
	)

	const Tag = tag

	return (
		<Tag
			className={rootCn}
			{...rest}
		>
			{children}
		</Tag>
	)
}
