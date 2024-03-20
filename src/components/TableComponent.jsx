import { Table } from 'react-bootstrap'
import { useState } from 'react'
import TableItem from './UI/TableItem'
import TableHead from './UI/TableHead'
import { sortHeadings } from '@/initialFormData'
import useSorting from '@/hooks/useSorting'

export default function TableComponent({ data }) {
	const { setSort, sorting, sortResults } = useSorting()
	const [activeTab, setActiveTab] = useState()

	const toggleSorting = (sort_by, sort_type) => {
		setSort(sort_by, sort_type)
		sortResults(sort_by, sort_type)
		setActiveTab(sort_by)
	}

	return (
		<Table striped bordered hover style={{ overflowX: 'auto' }}>
			<thead>
				<tr>
					{sortHeadings.map((heading, index) => (
						<TableHead
							key={index}
							title={heading.title}
							objectKey={heading.objectKey}
							toggleSorting={toggleSorting}
							activeTab={activeTab}
							sorting={sorting}
						/>
					))}
				</tr>
			</thead>
			<tbody>
				{data?.map((searchResult, index) => (
					<TableItem key={searchResult.id} searchResult={searchResult} />
				))}
			</tbody>
		</Table>
	)
}
