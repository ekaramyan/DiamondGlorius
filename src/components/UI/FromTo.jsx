import { InputGroup, FormControl } from 'react-bootstrap'

export default function FromTo({ handleChange, min, max }) {
	return (
		<>
			<InputGroup md={2}>
				<FormControl
					placeholder='From'
					type='number'
					name='min'
					value={min !== null ? min : ''}
					onChange={handleChange}
				/>
				<FormControl
					placeholder='To'
					type='number'
					name='max'
					value={max !== null ? max : ''}
					onChange={handleChange}
				/>
			</InputGroup>
		</>
	)
}
