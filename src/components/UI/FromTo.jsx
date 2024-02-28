import styles from '../Search/Search.module.css'

export default function FromTo({ title, formData, setFormData, objectKey }) {
	const { min, max } = formData[objectKey] ?? { min: '', max: '' }

	const handleChange = e => {
		const { name, value } = e.target

		setFormData({
			...formData,
			[objectKey]: {
				...formData[objectKey],
				[name]: value,
			},
		})
	}

	return (
		<>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 10,
					maxWidth: '80%',
				}}
			>
				<p className={styles.dis__wrapper_price}>{title}</p>
				<div
					md={2}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<input
						className={styles.dis__wrapper_input}
						placeholder='From'
						type='text'
						name='min'
						value={min}
						onChange={handleChange}
					/>
					<input
						className={styles.dis__wrapper_input}
						placeholder='To'
						type='text'
						name='max'
						value={max}
						onChange={handleChange}
					/>
				</div>
			</div>
		</>
	)
}
