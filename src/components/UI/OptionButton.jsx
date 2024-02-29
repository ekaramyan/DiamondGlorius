import { useState, useEffect } from 'react'

export default function OptionButton({
	option,
	imageSource,
	optionIds,
	onClick,
}) {
	const transformArrayValue = value => {
		if (value === null) {
			return []
		}
		return value
	}
	const [optionStyle, setOptionStyle] = useState('search__btn')
	useEffect(() => {
		if (imageSource) {
			setOptionStyle(
				transformArrayValue(optionIds)?.includes(option.id)
					? 'selected_option'
					: 'option__btn_highlight'
			)
		} else {
			setOptionStyle(
				transformArrayValue(optionIds)?.includes(option.id)
					? 'selected'
					: 'search__btn'
			)
		}
	}, [optionIds])

	return (
		<button className={optionStyle} value={option.id} onClick={onClick}>
			{imageSource && (
				<img
					className='search__img'
					src={imageSource}
					alt={option.title}
				/>
			)}
			<p className='search__descr'>{option.title}</p>
		</button>
	)
}
