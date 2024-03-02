import { Modal, Button } from 'react-bootstrap'
import Image from 'next/image'

export default function ImageModal({ modalSrc, handleCloseModal, imageData }) {
	return (
		<Modal show={modalSrc} onHide={handleCloseModal} size='xl'>
			<Modal.Header closeButton />
			<Modal.Body>
				<div
					style={{
						width: '100%',
						height: '80vh',
						position: 'relative',
						borderRadius: 15,
						overflow: 'hidden',
					}}
				>
					<Image
						src={modalSrc}
						alt={imageData.stno}
						layout='fill'
						objectFit='contain'
						style={{ borderRadius: 15 }}
					/>
				</div>
			</Modal.Body>
		</Modal>
	)
}
