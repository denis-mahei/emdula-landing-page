import css from './Button.module.css';

const Button = ({children,variant="primary",size="normal"}) => {
	const classNames = `${css.customButton} ${css[variant]} ${css[size]}`
	return (
		<button type="submit" className={classNames}>{children}</button>
	)
}
export default Button