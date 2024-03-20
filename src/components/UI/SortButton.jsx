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
	return (
		<>
			{objectKey && (
				<Button className={buttonClassName}>
					<p>{title}</p>
					{objectKey && (
						<div style={{ display: 'flex', flexDirection: 'column' }}>
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
						</div>
					)}
				</Button>
			)}
		</>
	)
}
