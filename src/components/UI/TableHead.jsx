// TableHead.js
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons'

export default function TableHead({
	toggleSorting,
	title,
	objectKey,
	activeTab,
	sorting,
}) {
	const isActive = objectKey === activeTab
	const isSortingBy = objectKey === sorting.sort_by
	const isAscending = sorting.sort_type === 'asc'

	return (
		<th className={isActive ? 'active' : ''}>
			<div className='table__heading'>
				<p>{title}</p>
				{objectKey && (
					<>
						{isActive ? (
							isAscending ? (
								<ChevronUp
									className={isSortingBy ? '' : 'invisible'}
									onClick={() => toggleSorting(objectKey, 'desc')}
								/>
							) : (
								<ChevronDown
									className={isSortingBy ? '' : 'invisible'}
									onClick={() => toggleSorting(objectKey, 'asc')}
								/>
							)
						) : (
							<>
								<ChevronUp
									className={isSortingBy ? 'invisible' : ''}
									onClick={() => toggleSorting(objectKey, 'asc')}
								/>
								<ChevronDown
									className={isSortingBy ? 'invisible' : ''}
									onClick={() => toggleSorting(objectKey, 'desc')}
								/>
							</>
						)}
					</>
				)}
			</div>
		</th>
	)
}
