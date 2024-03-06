import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { ChevronDown } from 'react-bootstrap-icons'
import useSorting from '@/hooks/useSorting'

export default function SortButton({ title, objectKey }) {
	const { sortResults, setSort, sorting, loading, error, success } =
		useSorting()

	const toggleSorting = sort_by => {
		const newSortType =
			sorting.sort_by === sort_by && sorting.sort_type === true ? false : true
		setSort(sort_by, newSortType)
		sortResults()
	}
	const chevronClassName = `table__sort ${
		objectKey === sorting?.sort_by && sorting.sort_type && 'rotate'
	}`

	return (
		<>
			{objectKey && (
				<Button
					className='sort__button'
					onClick={() => toggleSorting(objectKey)}
				>
					<p>{title}</p>
					{objectKey && <ChevronDown className={chevronClassName} />}
				</Button>
			)}
		</>
	)
}
