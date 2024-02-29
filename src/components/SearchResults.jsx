import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'

import TableItem from './UI/TableItem'

export default function SearchResults() {
	const data = useSelector(state => state.searchResults)
	console.log(data)
	const [searchResults, setSearchResults] = useState([])
	useEffect(() => {
		setSearchResults(data?.data?.data)
	}, [data])
	const pagination = data.data
	const router = useRouter()

	const backToFilters = () => {
		router.push('/')
	}

	return (
		<div style={{ marginTop: 25 }}>
			<button className='returnFilters' onClick={backToFilters}>
				Return to filters
			</button>
			{/* TODO: 
      1)Добавить кнопки пагинации, кнопку для возврата фильтрам
      2) Отредактировать стили карточек, добавить поля
      */}
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
					{searchResults?.map((searchResult, index) => (
						<TableItem key={searchResult.id} searchResult={searchResult} />
					))}
				</tbody>
			</Table>
		</div>
	)
}
