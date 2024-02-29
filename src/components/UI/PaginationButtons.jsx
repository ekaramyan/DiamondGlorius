import { Pagination } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function PaginationButtons({
	totalPages,
	currentPage,
	onPageChange,
}) {
	const formData = useSelector(state => state.filters)
	const pageNumbers = []
	const maxVisiblePages = 25

	let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
	let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

	if (totalPages <= maxVisiblePages) {
		startPage = 1
		endPage = totalPages
	} else if (endPage === totalPages) {
		startPage = totalPages - maxVisiblePages + 1
	}

	for (let i = startPage; i <= endPage; i++) {
		pageNumbers.push(
			<Pagination.Item
				key={i}
				active={i === currentPage}
				onClick={() => onPageChange(formData, 25, i)}
			>
				{i}
			</Pagination.Item>
		)
	}

	return (
		<Pagination>
			<Pagination.First
				onClick={() => onPageChange(formData, 25, 1)}
				disabled={currentPage === 1}
			/>
			<Pagination.Prev
				onClick={() => onPageChange(formData, 25, currentPage - 1)}
				disabled={currentPage === 1}
			/>
			{pageNumbers}
			<Pagination.Next
				onClick={() => onPageChange(formData, 25, currentPage + 1)}
				disabled={currentPage === totalPages}
			/>
			<Pagination.Last
				onClick={() => onPageChange(formData, 25, totalPages)}
				disabled={currentPage === totalPages}
			/>
		</Pagination>
	)
}
