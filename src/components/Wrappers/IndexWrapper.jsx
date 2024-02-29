import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import Header from '../Header'
import Footer from '../Footer'
import Cart from '../Cart'

export default function IndexWrapper({ children, ...props }) {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const theme = useSelector(state => state.theme)
	useEffect(() => {
		const root = document.documentElement
		if (theme === 'dark') {
			root.classList.add('dark-theme')
		} else {
			root.classList.remove('dark-theme')
		}
	}, [theme])

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
