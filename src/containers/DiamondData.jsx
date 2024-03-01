import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'

export default function DiamondData({ diamond }) {
	console.log(diamond)
	return (
		<>
			<Col>
				<Row
					style={{
						display: 'flex',
						alignItems: 'flex-start',
						justifyContent: 'center',
						gap: 10,
						marginLeft: 2,
						marginTop: 10,
					}}
				>
					<div
						style={{
							width: 508,
							height: 400,
							position: 'relative',
							borderRadius: 15,
							overflow: 'hidden',
						}}
					>
						<Image
							src={diamond.img_url}
							alt={diamond.comment}
							layout='fill'
							// objectFit='contain'
							objectFit='cover'
							style={{ borderRadius: 15 }}
						/>
					</div>
					<div
						style={{
							width: 530,
							height: '100%',
							position: 'relative',
							borderRadius: 15,
							overflow: 'hidden',
						}}
					>
						<iframe
							src={diamond.vido_url}
							width='100%'
							height='482'
							frameBorder='0'
							scrolling='no'
							style={{ borderRadius: 15 }}
						></iframe>
					</div>
				</Row>
				<Col>
					<p>Cert id: {diamond.cert_no}</p>
					<div
						style={{
							width: '100%',
							height: '1000px',
							position: 'relative',
							borderRadius: 15,
							overflow: 'hidden',
						}}
					>
						<Image
							src={diamond.cert_url}
							alt='certificate'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
			</Col>
		</>
	)
}
