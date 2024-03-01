import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Row } from 'react-bootstrap'
import { FilterCircle } from 'react-bootstrap-icons'
import useSearchDiamonds from '@/hooks/useSearchDiamonds'
import TableItem from './UI/TableItem'
import PaginationButtons from './UI/PaginationButtons'

export default function SearchResults() {
	const data = useSelector(state => state.searchResults)

	const [searchResults, setSearchResults] = useState([])
	useEffect(() => {
		setSearchResults(data?.data)
	}, [data])
	const router = useRouter()
	const { searchDiamonds, loading, error, success } = useSearchDiamonds()

	const backToFilters = () => {
		router.push('/')
	}
	console.log(searchResults)
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
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Stack №</th>
						<th>Shape</th>
						<th>Carat</th>
						<th>Col</th>
						<th>Clarity</th>
						<th>Cs</th>
						<th>Cut</th>
						<th>Pol</th>
						<th>Sym</th>
						<th>Fl</th>
						<th>Lab</th>
						<th>Table%</th>
						<th>TD%</th>
						<th>Measurement</th>
						<th>Bit</th>
						<th>Bc</th>
						<th>Wt</th>
						<th>Wc</th>
						<th>Milky</th>
						<th>L/W Ratio</th>
						<th>Additional</th>
					</tr>
				</thead>
				<tbody>
					{searchResults?.data?.map((searchResult, index) => (
						<TableItem key={searchResult.id} searchResult={searchResult} />
					))}
				</tbody>
			</Table>
		</div>
	)
}
