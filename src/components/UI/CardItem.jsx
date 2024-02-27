import { Card, Button } from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../SearchResults/SearchResults.module.css'

export default function CardItem({ searchResult }) {
	const router = useRouter()
	const imgSrc = searchResult.img_url
	const watchAll = id => {
		router.push(`/diamonds/${id}`)
	}
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
				<Button variant='primary'>Add to cart</Button>
				<Button variant='primary' onClick={() => watchAll(searchResult.id)}>
					Watch all data
				</Button>
			</Card.Body>
		</Card>
	)
}
