import SortButton from './UI/SortButton'
import { sortHeadings } from '@/initialFormData'
import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function SortList() {
	return (
		<DropdownButton title='Sort' className='sort'>
			{sortHeadings.map((button, index) => (
				<Dropdown.Item key={index}>
					<SortButton title={button.title} objectKey={button.objectKey} />
				</Dropdown.Item>
			))}
		</DropdownButton>
	)
}
