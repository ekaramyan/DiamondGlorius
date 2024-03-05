import { Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setLimit } from '@/redux/actions'

const limits = [10, 20, 25, 50, 100, 150, 200, 250, 300, 500, 1000]

export default function LimitList({ formData, page, onPageChange }) {
	const dispatch = useDispatch()

	const handleLimitChange = limit => {
		dispatch(setLimit(limit))
		onPageChange(formData, page, limit)
	}

	return (
		<DropdownButton title='Limit' className='sort'>
			{limits.map((limit, index) => (
				<Dropdown.Item key={index}>
					<Button
						className='sort__button'
						style={{ justifyContent: 'center' }}
						onClick={() => handleLimitChange(limit)}
					>
						{limit}
					</Button>
				</Dropdown.Item>
			))}
		</DropdownButton>
	)
}
