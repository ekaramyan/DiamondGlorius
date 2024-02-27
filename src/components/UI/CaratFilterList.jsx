import { Button, Col } from 'react-bootstrap'
import styles from '../Search/Search.module.css'

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
		const newCarats = [...carats]
		newCarats[index] = {
			...newCarats[index],
			[name]: Number(value),
		}
		updateFilters(newCarats)
	}

	return (
		<div
			style={{
				display: 'flex',
				gap: 25,
				alignItems: 'flex-start',
				justifyContent: 'center',
			}}
		>
			<p className={styles.Title}>Carat</p>
			<Col>
				{carats.map((carat, index) => (
					<div key={index} className={styles.carat__wrapper_input}>
						<input
							className={styles.carat__wrapper_inputItem}
							placeholder='From'
							type='number'
							name='min'
							value={carat.min}
							onChange={e => handleChange(e, index)}
						/>
						<input
							className={styles.carat__wrapper_inputItem}
							placeholder='To'
							type='number'
							name='max'
							value={carat.max}
							onChange={e => handleChange(e, index)}
						/>
					</div>
				))}
			</Col>
			{carats.length < 3 && <Button onClick={addCarat}>+</Button>}
			{carats.length > 1 && <Button onClick={reduceCarat}>-</Button>}
		</div>
	)
}
