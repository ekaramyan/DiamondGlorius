import { Button, Col, Row } from 'react-bootstrap'
import FromTo from './UI/FromTo'
import FromToWrapper from './Wrappers/FromToWrapper'

export default function CaratFilterList({
	setFilters,
	carats,
	formData,
	objectKey,
}) {
	const maxCaratsLength = 3
	const updateFilters = newCarats => {
		const newFormData = {
			...formData,
			[objectKey]: newCarats,
		}
		setFilters(newFormData)
	}

	const addCarat = () => {
		if (carats.length < maxCaratsLength) {
			const newCarats = [...carats, { min: null, max: null }]
			updateFilters(newCarats)
		}
	}

	const reduceCarat = () => {
		if (carats.length > 1) {
			const newCarats = carats.slice(0, -1)
			updateFilters(newCarats)
		}
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
		<FromToWrapper title='Carat'>
			<Row md={6} style={{ gap: 10 }}>
				<Col md={8} className='carat__inputs'>
					{carats.map((carat, index) => (
						<FromTo
							key={index}
							handleChange={e => handleChange(e, index)}
							min={carat.min !== null ? carat.min : ''}
							max={carat.max !== null ? carat.max : ''}
						/>
					))}
				</Col>
				<div className='carat__button__wrapper'>
					{carats.length < maxCaratsLength && (
						<Button className='carat__button' onClick={addCarat}>
							+
						</Button>
					)}
					{carats.length > 1 && (
						<Button className='carat__button' onClick={reduceCarat}>
							-
						</Button>
					)}
				</div>
			</Row>
		</FromToWrapper>
	)
}
