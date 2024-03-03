import { useState } from 'react'
import FromToWrapper from './Wrappers/FromToWrapper'
import FromTo from './UI/FromTo'

export default function FromToComponent({
	title,
	formData,
	setFormData,
	objectKey,
}) {
	const { min: initialMin, max: initialMax } = formData[objectKey] ?? {
		min: null,
		max: null,
	}
	const [min, setMin] = useState(initialMin)
	const [max, setMax] = useState(initialMax)

	const handleChange = e => {
		const { name, value } = e.target
		let newMin = min
		let newMax = max

		if (name === 'min') {
			newMin = value === '' ? null : Number(value)
		} else {
			newMax = value === '' ? null : Number(value)
		}

		if (newMin !== null && newMax !== null && newMin > newMax) {
			const temp = newMin
			newMin = newMax
			newMax = temp
		}

		setMin(newMin)
		setMax(newMax)

		setFormData({
			...formData,
			[objectKey]: {
				...formData[objectKey],
				[name]: Number(value),
			},
		})
	}

	return (
		<FromToWrapper title={title}>
			<FromTo handleChange={handleChange} min={min} max={max} />
		</FromToWrapper>
	)
}
