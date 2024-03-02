import Image from 'next/image'
import { useState } from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'

import ImageModal from '@/components/UI/ImageModal'
import { diamondTable } from '@/initialFormData'
import ImageWrapper from '@/components/Wrappers/ImageWrapper'

export default function DiamondData({ diamond }) {
	const [modalSrc, setModalSrc] = useState(null)
	const tableData = diamondTable(diamond)

	const handleOpenModal = src => {
		setModalSrc(src)
	}

	const handleCloseModal = () => {
		setModalSrc(false)
	}

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

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
				<Table striped bordered hover style={{ maxWidth: 300 }}>
					<tbody>
						{tableData.map((_, index) => (
							<tr key={index}>
								<td style={{ textTransform: 'uppercase' }}>{_.title}</td>
								<td>{_.value}</td>
							</tr>
						))}
					</tbody>
				</Table>
				<Col>
					<Row>
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
							</div>
						</Col>
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
