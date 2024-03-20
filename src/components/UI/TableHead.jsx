import { useState, useEffect } from 'react'
import useSorting from '@/hooks/useSorting'
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons'

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
			<div className='table__heading'>
				<p>{title}</p>
				{objectKey && (
					<>
						{objectKey !== activeTab && (
							<ChevronUp
								className={chevronClassName}
								onClick={() =>
									toggleSorting(
										objectKey,
										sorting.sort_type === 'desc' ? 'asc' : 'desc'
									)
								}
							/>
						)}
						{
							<ChevronDown
								className={chevronClassName}
								onClick={() =>
									toggleSorting(
										objectKey,
										sorting.sort_type === 'asc' ? 'desc' : 'asc'
									)
								}
							/>
						}
					</>
				)}
			</div>
		</th>
	)
}
