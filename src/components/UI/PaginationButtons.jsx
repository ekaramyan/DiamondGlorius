import { Pagination } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'

export default function PaginationButtons({
	formData,
	limit,
	totalPages,
	currentPage,
	onPageChange,
}) {
	const isLaptop = useMediaQuery({ query: '(max-width: 1170px)' })
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const pageNumbers = []
	const maxVisiblePages = isMobile ? 4 : isLaptop ? 10 : 25

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
				onClick={() => onPageChange(formData, i, limit)}
			>
				{i}
			</Pagination.Item>
		)
	}

	return (
		<Pagination>
			<Pagination.First
				onClick={() => onPageChange(formData, 1, limit)}
				disabled={currentPage === 1}
			/>
			<Pagination.Prev
				onClick={() => onPageChange(formData, currentPage - 1, limit)}
				disabled={currentPage === 1}
			/>
			{pageNumbers}
			<Pagination.Next
				onClick={() => onPageChange(formData, currentPage + 1, limit)}
				disabled={currentPage === totalPages}
			/>
			<Pagination.Last
				onClick={() => onPageChange(formData, totalPages, limit)}
				disabled={currentPage === totalPages}
			/>
		</Pagination>
	)
}
