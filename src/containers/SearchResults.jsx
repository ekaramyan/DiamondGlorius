import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { FilterCircle } from 'react-bootstrap-icons'
import { useMediaQuery } from 'react-responsive'

import useSearchDiamonds from '@/hooks/useSearchDiamonds'
import { useLoaded } from '@/hooks/useLoaded'
import PaginationButtons from '../components/UI/PaginationButtons'
import TableComponent from '../components/TableComponent'
import Cards from '../components/Cards'

export default function SearchResults() {
	const data = useSelector(state => state.searchResults)
	const viewMode = useSelector(state => state.viewMode)
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const loaded = useLoaded()

	const [searchResults, setSearchResults] = useState([])
	useEffect(() => {
		setSearchResults(data?.data)
	}, [data])
	const router = useRouter()
	const { searchDiamonds, loading, error, success } = useSearchDiamonds()
	console.log(searchResults)
	const backToFilters = () => {
		router.push('/')
	}

	return (
		<div style={{ marginTop: 25 }}>
			<div
				style={{
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'center',
					gap: 25,
					marginBottom: 30,
				}}
			>
				<button className='returnFilters' onClick={backToFilters}>
					<FilterCircle width={30} height={30} />
				</button>
				<PaginationButtons
					totalPages={searchResults.total_pages}
					currentPage={searchResults.current_page}
					onPageChange={searchDiamonds}
				/>
			</div>
			<div
				style={{
					overflowX: isMobile && viewMode === 'table' ? 'auto' : 'hidden',
				}}
			>
				{loaded && viewMode === 'cards' ? (
					<Cards data={searchResults.data} />
				) : (
					<TableComponent data={searchResults.data} />
				)}
			</div>
		</div>
	)
}
