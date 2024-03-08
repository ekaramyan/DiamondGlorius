import { useEffect, useState } from 'react'
import OptionButton from './OptionButton'

export default function FilterButtons({
	buttons,
	title,
	updateFormData,
	data,
	formData,
}) {
	const key = data.key

	const [selectedOptions, setSelectedOptions] = useState(formData[key])

	useEffect(() => {
		setSelectedOptions(formData[key])
	}, [formData[key]])

	const handleOptionClick = optionId => {
		if (optionId === undefined) {
			setSelectedOptions(null)
			updateFormData(key, null)
		} else {
			const updatedOptions = selectedOptions ? [...selectedOptions] : []
			if (selectedOptions?.includes(optionId)) {
				const updatedIds = updatedOptions.filter(id => id !== optionId)
				setSelectedOptions(updatedIds)
				updateFormData(key, updatedIds.length < 1 ? null : updatedIds)
			} else {
				updatedOptions.push(optionId)
				setSelectedOptions(updatedOptions)
				updateFormData(key, updatedOptions)
			}
		}
	}


	return (
		<div className='option__wrapper'>
			<div className='option__title'>
				<h5>{title}</h5>
			</div>
			<div className='option__list'>
				{buttons.map((option, idx) => (
					<OptionButton
						key={idx}
						option={option}
						imageSource={null}
						optionIds={selectedOptions}
						onClick={() => handleOptionClick(option.id)}
					/>
				))}
			</div>
		</div>
	)
}
