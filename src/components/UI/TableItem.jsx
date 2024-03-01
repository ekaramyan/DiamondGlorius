import { useState } from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Eye, Cart, ChevronDown } from 'react-bootstrap-icons'
import ImageModal from './ImageModal'

export default function TableItem({ searchResult }) {
	const router = useRouter()
	const [showDetails, setShowDetails] = useState(false)
	const [modalSrc, setModalSrc] = useState(null)

	const watchAll = id => {
		router.push(`/diamonds/${id}`)
	}

	const toggleDetails = () => {
		setShowDetails(!showDetails)
	}

	const handleOpenModal = src => {
		setModalSrc(src)
	}

	const handleCloseModal = () => {
		setModalSrc(false)
	}

	return (
		<>
			<tr>
				<td>{searchResult.stno}</td>
				<td>{searchResult.shape.title}</td>
				<td>{searchResult.carat}</td>
				<td>{searchResult.color.title}</td>
				<td>{searchResult.clarity.title}</td>
				<td>{searchResult.color_shade.title}</td>
				<td>{searchResult.cut_type.title}</td>
				<td>{searchResult.finish_type.title}</td>
				<td>{searchResult.sym_type.title}</td>
				<td>{searchResult.fluro_type.title}</td>
				<td>{searchResult.cert.title}</td>
				<td>{searchResult.table_per}%</td>
				<td>{searchResult.depth_per}%</td>
				<td>{searchResult.measure}</td>
				<td>{searchResult.bit_type.title}</td>
				<td>{searchResult.bc_type.title}</td>
				<td>{searchResult.wt_type.title}</td>
				<td>{searchResult.wc_type.title}</td>
				<td>{searchResult.milky_type.title}</td>
				<td>{searchResult.l_w_ratio}</td>
				<td>
					<div style={{ display: 'flex', gap: 5 }}>
						<Button variant='primary'>
							<Cart />
						</Button>
						<Button variant='primary' onClick={() => watchAll(searchResult.id)}>
							<Eye />
						</Button>
						<Button variant='primary' onClick={toggleDetails}>
							<ChevronDown
								width={15}
								height={15}
								style={{
									transform: showDetails ? 'rotate(180deg)' : 'rotate(0)',
									transition: 'transform 0.3s ease-in-out',
								}}
							/>
						</Button>
					</div>
				</td>
			</tr>
			<tr>
				<td
					colSpan='21'
					style={{ visibility: showDetails ? 'visible' : 'hidden' }}
				>
					<Card.Body
						style={{
							display: 'flex',
							gap: 15,
							maxHeight: showDetails ? '150px' : '0',
							overflow: 'hidden',
							transition: 'max-height 0.3s ease',
						}}
					>
						<div
							className='cardImage'
							onClick={() => handleOpenModal(searchResult.img_url)}
						>
							<Image
								src={searchResult.img_url}
								alt={searchResult.stno}
								width={150}
								height={120}
							/>
						</div>
						<div
							className='cardImage'
							onClick={() => handleOpenModal(searchResult.cert_url)}
						>
							<Image
								src={searchResult.cert_url}
								alt={searchResult.stno}
								width={150}
								height={120}
							/>
						</div>
					</Card.Body>
				</td>
			</tr>
			<ImageModal
				modalSrc={modalSrc}
				handleCloseModal={handleCloseModal}
				imageData={searchResult}
			/>
		</>
	)
}
