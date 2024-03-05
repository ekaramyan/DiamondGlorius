import { Row } from 'react-bootstrap'
import CardItem from './UI/CardItem'

export default function Cards({ data }) {
	return (
		<Row
			xxl={4}
			xl={4}
			l={4}
			md={3}
			sm={2}
			className='align-items-start'
			style={{ gap: 10, justifyContent: 'center' }}
		>
			{data?.map((searchResult, index) => (
				<CardItem key={searchResult.id} searchResult={searchResult} />
			))}
		</Row>
	)
}
