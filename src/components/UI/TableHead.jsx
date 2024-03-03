import useSorting from '@/hooks/useSorting'
import { Row, Col } from 'react-bootstrap'
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons'

export default function TableHead({ title, objectKey }) {
	const { sortResults, setSort, sorting, loading, error, success } =
		useSorting()

	const toggleSorting = sort_by => {
		const newSortType =
			sorting.sort_by === sort_by && sorting.sort_type === true ? false : true
		setSort(sort_by, newSortType)
		sortResults(25)
	}
	const chevronClassName = `table__sort ${
		objectKey === sorting?.sort_by && sorting.sort_type && 'rotate'
	}`

	return (
		<th>
			<div className='table__heading' onClick={() => toggleSorting(objectKey)}>
				<p>{title}</p>
				{objectKey && <ChevronDown className={chevronClassName} />}
			</div>
		</th>
	)
}
