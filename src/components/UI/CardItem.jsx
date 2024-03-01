import { Card, Button, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Eye, Cart } from 'react-bootstrap-icons'

export default function CardItem({ searchResult }) {
	const router = useRouter()
	const imgSrc = searchResult.img_url
	const watchAll = id => {
		router.push(`/diamonds/${id}`)
	}
	return (
		<Card className='card'>
			<Card.Body>
				<Row>
					<Col>
						<div className='cardImage'>
							<Image
								src={imgSrc}
								alt={searchResult.stno}
								layout='fill'
								objectFit='cover'
							/>
						</div>
					</Col>
					<Col>
						<Card.Title>{searchResult.shape.title}</Card.Title>
						<Card.Text>#{searchResult.stno}</Card.Text>
						<Card.Text>
							{searchResult.cert.title} {searchResult.cert_no}
						</Card.Text>
					</Col>
					<Col>
						<Card.Text>Rap Price: {searchResult.rap_price}</Card.Text>
						<Card.Text>DIS: {searchResult.disc}</Card.Text>
						<Card.Text>AMT$: {searchResult.amt}</Card.Text>
					</Col>
				</Row>
				<div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 15 }}>
					<Button variant='primary'>
						<Cart />
					</Button>
					<Button variant='primary' onClick={() => watchAll(searchResult.id)}>
						<Eye />
					</Button>
				</div>
			</Card.Body>
			<Card.Footer>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 15,
					}}
				>
					<p>{searchResult.carat}</p>
					<p>{searchResult.color.title}</p>
					<p>{searchResult.clarity.title}</p>
					<p>{searchResult.color_shade.title}</p>
					<p>{searchResult.cut_type.title}</p>
					<p>{searchResult.finish_type.title}</p>
					<p>{searchResult.sym_type.title}</p>
					<p>{searchResult.fluro_type.title}</p>
				</div>
			</Card.Footer>
			<Card.Footer>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: 15,
						}}
					>
						<p>INC:</p>
						<p>{searchResult.bit_type.title}</p>
						<p>{searchResult.bc_type.title}</p>
						<p>{searchResult.wt_type.title}</p>
						<p>{searchResult.wc_type.title}</p>
					</div>

					<p>
						<span>MILKY:</span> {searchResult.fluro_type.title}
					</p>
				</div>
			</Card.Footer>
		</Card>
	)
}
