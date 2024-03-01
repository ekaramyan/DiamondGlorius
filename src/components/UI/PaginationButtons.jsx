import { Pagination } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

export default function PaginationButtons({
	totalPages,
	currentPage,
	onPageChange,
}) {
	const formData = useSelector(state => state.filters)
	const isLaptop = useMediaQuery({ query: '(max-width: 1170px)' })
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const pageNumbers = []
	const maxVisiblePages = isMobile ? 4 : isLaptop ? 10 : 25
	const limit = 25

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
				onClick={() => onPageChange(formData, limit, 1)}
				disabled={currentPage === 1}
			/>
			<Pagination.Prev
				onClick={() => onPageChange(formData, limit, currentPage - 1)}
				disabled={currentPage === 1}
			/>
			{pageNumbers}
			<Pagination.Next
				onClick={() => onPageChange(formData, limit, currentPage + 1)}
				disabled={currentPage === totalPages}
			/>
			<Pagination.Last
				onClick={() => onPageChange(formData, limit, totalPages)}
				disabled={currentPage === totalPages}
			/>
		</Pagination>
	)
}
