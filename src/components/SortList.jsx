import { useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import SortButton from './UI/SortButton'
import { sortHeadings } from '@/initialFormData'
import useSorting from '@/hooks/useSorting'

export default function SortList() {
	const { setSort, sorting, sortResults } = useSorting()
	const [activeTab, setActiveTab] = useState()

	const toggleSorting = sort_by => {
		const newSortType =
			sorting.sort_by === sort_by && sorting.sort_type === 'asc'
				? 'desc'
				: 'asc'
		setSort(sort_by, newSortType)
		sortResults(sort_by, newSortType)
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
