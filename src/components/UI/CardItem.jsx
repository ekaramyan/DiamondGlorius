import styles from '../SearchResults/SearchResults.module.css'
import { Card, Button } from 'react-bootstrap'

export default function CardItem({ searchResult }) {
	return (
		<Card className={styles.card} style={{ width: '18rem' }}>
			<Card.Img
				variant='top'
				src={searchResult.img_url}
				alt={searchResult.stno}
			/>
			<Card.Body>
				<Card.Title>{searchResult.stno}</Card.Title>
				<Card.Text>{searchResult.comment}</Card.Text>
				<Button variant='primary'>Go somewhere</Button>
			</Card.Body>
		</Card>
	)
}
