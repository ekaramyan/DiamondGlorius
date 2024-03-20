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

	return (
		<th className={isActive ? 'active' : ''}>
			<div className='table__heading'>
				<p>{title}</p>
				{objectKey && (
					<>
						{isActive ? (
							sorting.sort_type === 'asc' ? (
								<ChevronUp onClick={() => toggleSorting(objectKey, 'desc')} />
							) : (
								<ChevronDown onClick={() => toggleSorting(objectKey, 'asc')} />
							)
						) : (
							<>
								<ChevronUp onClick={() => toggleSorting(objectKey, 'asc')} />
								<ChevronDown onClick={() => toggleSorting(objectKey, 'desc')} />
							</>
						)}
					</>
				)}
			</div>
		</th>
	)
}
