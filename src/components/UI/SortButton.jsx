import { Button } from 'react-bootstrap'
import { ChevronDown } from 'react-bootstrap-icons'

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
				<Button
					className={buttonClassName}
					onClick={() => toggleSorting(objectKey)}
				>
					<p>{title}</p>
					<ChevronDown className={chevronClassName} />
				</Button>
			)}
		</>
	)
}
