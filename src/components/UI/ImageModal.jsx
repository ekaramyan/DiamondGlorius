import { Modal, Button } from 'react-bootstrap'
import Image from 'next/image'

export default function ImageModal({ modalSrc, handleCloseModal, imageData }) {
	return (
		<Modal show={modalSrc} onHide={handleCloseModal} size='xl'>
			<Modal.Header closeButton />
			<Modal.Body>
				<div className='modal__body'>
					<Image className='modal__body_img'
						src={modalSrc}
						alt={imageData.stno}
						layout='fill'
						objectFit='contain'
					/>
				</div>
			</Modal.Body>
		</Modal>
	)
}
