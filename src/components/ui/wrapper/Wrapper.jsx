import s from './Wrapper.module.sass'

export const Wrapper = ({ children }) => {
	return <div className={s.wrapper}>{children}</div>
}
