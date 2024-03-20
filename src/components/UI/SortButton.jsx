import { Button } from 'react-bootstrap'
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons'

export default function SortButton({
	title,
	toggleSorting,
	objectKey,
	activeTab,
	sorting,
}) {
	const chevronClassName = `table__sort ${
		objectKey === sorting.sort_by && sorting.sort_type === 'desc'
			? 'rotate'
			: ''
	}`

	const buttonClassName = `sort__button ${
		objectKey !== null && objectKey === activeTab ? 'active' : ''
	}`

	const isActive = objectKey === activeTab
	const isSortingBy = objectKey === sorting.sort_by
	const isAscending = sorting.sort_type === 'asc'
	return (
		<>
			{objectKey && (
				<Button className={buttonClassName}>
					<p>{title}</p>
					{objectKey && (
						<div style={{ display: 'flex', flexDirection: 'column' }}>
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
						</div>
					)}
				</Button>
			)}
		</>
	)
}
