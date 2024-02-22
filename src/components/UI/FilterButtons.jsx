import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { ChevronDown } from 'react-bootstrap-icons'

export default function FilterButtons({
	buttons,
	title,
	updateFormData,
	data,
	formData,
}) {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOptions, setSelectedOptions] = useState([])
	const key = data.key

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	const transformArrayValue = value => {
		if (value === null) {
			return []
		}
		return value
	}

	const handleOptionClick = optionId => {
		if (optionId === undefined) {
			updateFormData(key, [])
			setSelectedOptions([])
		} else {
			const updatedIds = data.buttons.includes(optionId)
				? data.buttons.filter(id => id !== optionId)
				: [...transformArrayValue(formData[key]), optionId]
			setSelectedOptions(updatedIds)
			updateFormData(key, updatedIds)
		}
	}

	return (
		<>
			<div
				onClick={handleToggle}
				style={{
					cursor: 'pointer',
					padding: 5,
					background: '#326fca',
					border: '1px solid #ddd',
					borderRadius: 5,
					marginBottom: 5,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<h5 style={{ textTransform: 'uppercase' }}>{title}</h5>
				<ChevronDown
					width={30}
					height={30}
					style={{
						transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
						transition: 'transform 0.3s ease-in-out',
					}}
				/>
			</div>
			<div
				style={{
					maxHeight: isOpen ? '300px' : '0px',
					overflow: 'hidden',
					transition: 'max-height 0.3s ease-in-out',
				}}
			>
				<Form.Select aria-label='Default select example' multiple>
					{buttons.map((option, idx) => (
						<option
							key={idx}
							value={option.id}
							onClick={() => handleOptionClick(option.id)}
							defaultValue={selectedOptions?.includes(option.id)}
							style={{
								background: selectedOptions?.includes(option.id) && '#326fca99',
							}}
						>
							{option.title}
						</option>
					))}
				</Form.Select>
			</div>
		</>
	)
}
