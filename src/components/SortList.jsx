import { useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import SortButton from './UI/SortButton'
import { sortHeadings } from '@/initialFormData'
import useSorting from '@/hooks/useSorting'

export default function SortList() {
	const { setSort, sorting, sortResults } = useSorting()
	const [activeTab, setActiveTab] = useState()

	const toggleSorting = (sort_by, sort_type) => {
		setSort(sort_by, sort_type)
		sortResults(sort_by, sort_type)
		setActiveTab(sort_by)
	}
	return (
		<DropdownButton title='Sort' className='sort'>
			{sortHeadings.map((button, index) => (
				<Dropdown.Item key={index}>
					<SortButton
						title={button.title}
						objectKey={button.objectKey}
						toggleSorting={toggleSorting}
						activeTab={activeTab}
						sorting={sorting}
					/>
				</Dropdown.Item>
			))}
		</DropdownButton>
	)
}
