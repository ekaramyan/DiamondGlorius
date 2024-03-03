export default function FromToWrapper({ children, ...props }) {
	return (
		<div className='from-to'>
			<div className='from-to__wrapper'>
				<div className='option__title'>
					<h5>{props.title}</h5>
				</div>
				{children}
			</div>
		</div>
	)
}
