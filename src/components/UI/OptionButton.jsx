import { useState, useEffect } from 'react'

export default function OptionButton({
	option,
	imageSource,
	optionIds,
	onClick,
}) {
	const transformArrayValue = value => value || []

	const [optionStyle, setOptionStyle] = useState('search__btn')

	useEffect(() => {
		const isSelected = transformArrayValue(optionIds).includes(option.id)
		const newOptionStyle = imageSource
			? isSelected
				? 'selected_option'
				: 'option__btn_highlight'
			: isSelected
			? 'selected'
			: 'search__btn'
		setOptionStyle(newOptionStyle)
	}, [optionIds])

	return (
		<>
			{option.title && (
				<button className={optionStyle} value={option.id} onClick={onClick}>
					{imageSource && (
						<img className='search__img' src={imageSource} alt={option.title} />
					)}
					<p className='search__descr'>{option.title}</p>
				</button>
			)}
		</>
	)
}
