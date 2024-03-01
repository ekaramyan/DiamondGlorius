import { Row } from 'react-bootstrap'
import CardItem from './UI/CardItem'

export default function Cards({ data }) {
	return (
		<Row
			md={4}
			className='align-items-start'
			style={{ gap: 15, justifyContent: 'center' }}
		>
			{data?.map((searchResult, index) => (
				<CardItem key={searchResult.id} searchResult={searchResult} />
			))}
		</Row>
	)
}
