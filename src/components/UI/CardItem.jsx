import { Card, Button } from 'react-bootstrap'
import Image from 'next/image'
import styles from '../SearchResults/SearchResults.module.css'

export default function CardItem({ searchResult }) {
	const imgSrc = searchResult.img_url
	// .replace(/^http?:\/\//, 'https://')
	console.log(imgSrc)
	return (
		<Card className={styles.card} style={{ width: '18rem' }}>
			<Image src={imgSrc} alt={searchResult.stno} width={150} height={150} />
			<Card.Body>
				<Card.Title>{searchResult.stno}</Card.Title>
				<Card.Text>{searchResult.comment}</Card.Text>
				<Button variant='primary'>Go somewhere</Button>
			</Card.Body>
		</Card>
	)
}
