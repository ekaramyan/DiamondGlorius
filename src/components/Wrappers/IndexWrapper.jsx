import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Cart from '../Cart/Cart'

export default function IndexWrapper({ children, ...props }) {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	return (
		<div className='main__bg' {...props}>
			<Header showCart={handleShow} />
			<Container
				fluid
				style={{ maxWidth: '1400px', overflow: show ? 'hidden' : 'visible' }}
			>
				{children}
				<Cart show={show} close={handleClose} />
			</Container>
			<Footer />
		</div>
	)
}
