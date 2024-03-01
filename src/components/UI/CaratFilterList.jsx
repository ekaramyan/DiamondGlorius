import { useState } from 'react'
import { Button, Col } from 'react-bootstrap'

export default function CaratFilterList({
	setFilters,
	carats,
	formData,
	objectKey,
}) {
	const updateFilters = newCarats => {
		const newFormData = {
			...formData,
			[objectKey]: newCarats,
		}
		setFilters(newFormData)
	}

	const addCarat = () => {
		const newCarats = [...carats, { min: null, max: null }]
		updateFilters(newCarats)
	}

	const reduceCarat = () => {
		const newCarats = carats.slice(0, -1)
		updateFilters(newCarats)
	}

	const handleChange = (e, index) => {
		const { name, value } = e.target
		const newValue = value === '' ? null : Math.max(0, Number(value))
		const newCarats = [...carats]
		newCarats[index] = {
			...newCarats[index],
			[name]: newValue,
		}

		if (
			newCarats[index].min !== null &&
			newCarats[index].max !== null &&
			newCarats[index].min > newCarats[index].max
		) {
			const temp = newCarats[index].min
			newCarats[index].min = newCarats[index].max
			newCarats[index].max = temp
		}

		updateFilters(newCarats)
	}

	return (
		<div style={{ display: 'flex', gap: 25 }}>
			<p className='wrapper_price'>Carat</p>
			<Col md={2}>
				{carats.map((carat, index) => (
					<div
						key={`${carat.min}-${carat.max}`}
						className='carat__wrapper_input'
					>
						<input
							className='carat__wrapper_inputItem'
							placeholder='From'
							type='number'
							name='min'
							value={carat.min !== null ? carat.min : ''}
							onChange={e => handleChange(e, index)}
						/>
						<input
							className='carat__wrapper_inputItem'
							placeholder='To'
							type='number'
							name='max'
							value={carat.max !== null ? carat.max : ''}
							onChange={e => handleChange(e, index)}
						/>
					</div>
				))}
			</Col>
			{carats.length < 3 && (
				<Button className='btnCarat' onClick={addCarat}>
					+
				</Button>
			)}
			{carats.length > 1 && (
				<Button className='btnCarat' onClick={reduceCarat}>
					-
				</Button>
			)}
		</div>
	)
}
