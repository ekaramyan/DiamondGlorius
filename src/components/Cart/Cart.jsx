import { Modal, Button } from 'react-bootstrap'
import styles from './Cart.module.css'

export default function Cart({ show, close }) {
	return (
		<>
			<Modal show={show} onHide={close} className={styles.cart}>
				<Modal.Header closeButton>
					<Modal.Title>Shopping Cart</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* Place your cart content here */}
					<p>This is where cart items will be displayed.</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={close}>
						Close
					</Button>
					<Button variant='primary' onClick={close}>
						Checkout
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
