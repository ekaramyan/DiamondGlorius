import Image from 'next/image'
import { useState } from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap'
import { ArrowLeft } from 'react-bootstrap-icons'
import { useMediaQuery } from 'react-responsive'

import ImageModal from '@/components/UI/ImageModal'
import { diamondTable } from '@/initialFormData'
import ImageWrapper from '@/components/Wrappers/ImageWrapper'
import { useRouter } from 'next/router'

export default function DiamondData({ diamond }) {
	const [modalSrc, setModalSrc] = useState(null)
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const router = useRouter()
	if (!diamond) {
		return <>no data found</>
	}
	const tableData = diamondTable(diamond)

	const handleOpenModal = src => {
		setModalSrc(src)
	}

	const handleCloseModal = () => {
		setModalSrc(false)
	}

	return (
		<>
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
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
						gap: 25,
						marginBottom: 30,
					}}
				>
					<Button onClick={() => router.push('/diamonds')}>
						<ArrowLeft />
					</Button>
					<Button onClick={() => router.push('/diamonds')}>
						Back to search
					</Button>
				</div>
				<Table striped bordered hover style={{ maxWidth: 300 }}>
					<tbody>
						{tableData.map((_, index) => (
							<tr key={index}>
								<td>
									<p className='table__text table__title'>{_.title}</p>
								</td>
								<td>
									<p className='table__text'>{_.value}</p>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
				<Col>
					<Row xxl={2} xl={2} lg={2} md={1} sm={1}>
						<Col className='data-column'>
							<ImageWrapper
								source={diamond.img_url}
								handleOpenModal={handleOpenModal}
							/>
							<div className='data-column__text'>
								<p>stone id: {diamond.id}</p>
								<h6>
									{diamond.carat} {diamond.color.title} {diamond.clarity.title}
								</h6>
								<h6>Price: {diamond.rap_price}</h6>
							</div>
						</Col>
						<div className='data-column__iframe'>
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
						<div
							style={{
								position: 'relative',
								width: '100%',
								height: isMobile ? 300 : 700,
								borderRadius: 15,
								overflow: 'hidden',
								cursor: 'pointer',
							}}
							onClick={() => handleOpenModal(diamond.cert_url)}
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
			</Row>
			<ImageModal
				modalSrc={modalSrc}
				handleCloseModal={handleCloseModal}
				imageData={diamond}
			/>
		</>
	)
}
