
const Button = ({children,variant="primary",size="normal"}) => {
	const classNames = `btn-base btn-${variant} ${size}`
	return (
		<button type="submit" className={classNames}>{children}</button>
	)
}
export default Button