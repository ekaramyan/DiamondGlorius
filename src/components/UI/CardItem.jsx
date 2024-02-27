import { Card, Button } from 'react-bootstrap'
import Image from 'next/image'
import styles from '../SearchResults/SearchResults.module.css'

export default function CardItem({ searchResult }) {
	console.log(searchResult)
	const imgSrc = searchResult.img_url
	
	console.log(imgSrc)
	return (
		<Card className={styles.card}>
			<div className={styles.cardImage}>
				<Image
					src={imgSrc}
					alt={searchResult.stno}
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<Card.Body>
				<Card.Title>{searchResult.stno}</Card.Title>
				<Card.Text>{searchResult.comment}</Card.Text>
				<Button variant='primary'>Go somewhere</Button>
			</Card.Body>
		</Card>
	)
}
