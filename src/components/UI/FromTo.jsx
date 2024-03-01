import { useState } from 'react'

export default function FromTo({ title, formData, setFormData, objectKey }) {
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

	console.log(formData)
	return (
		<>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 10,
					maxWidth: '80%',
					marginBottom: 20,
				}}
			>
				<p className='wrapper_price'>{title}</p>
				<div
					md={2}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<input
						className='wrapper_input'
						placeholder='From'
						type='number'
						name='min'
						value={min !== null ? min : ''}
						onChange={handleChange}
					/>
					<input
						className='wrapper_input'
						placeholder='To'
						type='number'
						name='max'
						value={max !== null ? max : ''}
						onChange={handleChange}
					/>
				</div>
			</div>
		</>
	)
}
