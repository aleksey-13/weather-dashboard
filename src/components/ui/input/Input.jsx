import cn from 'clsx'
import { forwardRef } from 'react'


export const Input = forwardRef(
	(props, ref) => {
		const { className, placeholder, disabled, state, type, variant, ...rest } =
			props

		const rootCn = cn(className)

		return (
			<input
				className={rootCn}
				ref={ref}
				disabled={disabled}
				type={type}
				placeholder={placeholder}
				{...rest}
			/>
		)
	}
)
