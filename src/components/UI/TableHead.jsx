import { useState, useEffect } from 'react'
import useSorting from '@/hooks/useSorting'
import { ChevronDown } from 'react-bootstrap-icons'

export default function TableHead({
	toggleSorting,
	title,
	objectKey,
	activeTab,
	sorting,
}) {
	const chevronClassName = `table__sort ${
		objectKey === sorting.sort_by && sorting.sort_type === 'desc'
			? 'rotate'
			: ''
	}`

	const tableHeadingClassName =
		objectKey !== null && objectKey === activeTab ? 'active' : ''

	return (
		<th className={tableHeadingClassName}>
			<div className='table__heading' onClick={() => toggleSorting(objectKey)}>
				<p>{title}</p>
				{objectKey && <ChevronDown className={chevronClassName} />}
			</div>
		</th>
	)
}
