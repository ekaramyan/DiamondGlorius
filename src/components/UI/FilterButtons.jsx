import { useEffect, useState } from 'react'
import { ChevronDown } from 'react-bootstrap-icons'
import OptionButton from './OptionButton'

export default function FilterButtons({
	buttons,
	title,
	updateFormData,
	data,
	formData,
}) {
	// const [isOpen, setIsOpen] = useState(false)
	const key = data.key

	const [selectedOptions, setSelectedOptions] = useState(formData[key])
	// const handleToggle = () => {
	// 	setIsOpen(!isOpen)
	// }

	const transformArrayValue = value => {
		if (value === null) {
			return []
		}
		return value
	}

	const handleOptionClick = optionId => {
		if (optionId === undefined) {
			setSelectedOptions(null)
			updateFormData(key, selectedOptions)
		} else {
			if (selectedOptions?.includes(optionId)) {
				const updatedIds = transformArrayValue(selectedOptions).filter(
					id => id !== optionId
				)
				setSelectedOptions(updatedIds)
				updateFormData(
					key,
					selectedOptions?.length < 1 ? null : selectedOptions
				)
			} else {
				const updatedIds = [...transformArrayValue(selectedOptions), optionId]
				setSelectedOptions(updatedIds)
				updateFormData(
					key,
					selectedOptions?.length < 1 ? null : selectedOptions
				)
			}
		}
	}

	return (
		<div className='option__wrapper'>
			<div
				className='option__title'
				// onClick={handleToggle}
			>
				<h5>{title}</h5>
				{/* <ChevronDown
					width={30}
					height={30}
					style={{
						transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
						transition: 'transform 0.3s ease-in-out',
					}}
				/> */}
			</div>
			<div
				style={{
					// maxHeight: isOpen ? '300px' : '0px',
					overflow: 'hidden',
					transition: 'max-height 0.3s ease-in-out',
				}}
			>
				<div multiple className='option__list'>
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
		</div>
	)
}
