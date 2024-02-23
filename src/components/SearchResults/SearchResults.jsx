import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import CardItem from '../UI/CardItem'

export default function SearchResults() {
	const data = useSelector(state => state.searchResults)
	const pagination = data.data
	const searchResults = data.data.data

	return (
		<div style={{ marginTop: 25 }}>
			{/* TODO: 
      1)Добавить кнопки пагинации, кнопку для возврата фильтрам
      2) Отредактировать стили карточек, добавить поля
      */}
			<Row md={4} className='align-items-start' style={{ gap: 15 }}>
				{searchResults.map(searchResult => (
					<CardItem key={searchResult.id} searchResult={searchResult} />
				))}
			</Row>
		</div>
	)
}
