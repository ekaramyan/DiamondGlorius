import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function OptionButton({
	option,
	imageSource,
	optionIds,
	onClick,
}) {
	const transformArrayValue = value => value || []

	const [optionStyle, setOptionStyle] = useState('option__btn')
	const [selected, setSelected] = useState('')

	useEffect(() => {
		const isSelected = transformArrayValue(optionIds).includes(option.id)
		const newOptionStyle = imageSource ? 'option__btn__big' : ''
		const selectedStyle = isSelected ? 'selected' : ''
		setSelected(selectedStyle)
		setOptionStyle(newOptionStyle)

		if (option.title.toLowerCase() === 'all' && optionIds < 1) {
			setSelected('selected')
		}
		if (option.title.toLowerCase() === 'other') {
			const containsAnyOtherId = option.id.some(id =>
				transformArrayValue(optionIds).includes(id)
			)
			containsAnyOtherId ? setSelected('selected') : setSelected('')
		}
	}, [optionIds, option.id, imageSource])

	return (
		<>
			{option.title && option.visible !== false && (
				<button
					className={`option__btn ${optionStyle} ${selected}`}
					value={option.id}
					onClick={onClick}
				>
					{imageSource && (
						<Image
							width={35}
							height={35}
							src={imageSource}
							alt={option.title}
						/>
					)}
					<p className='search__descr' style={{ fontSize: imageSource && 10 }}>
						{option.title}
					</p>
				</button>
			)}
		</>
	)
}
