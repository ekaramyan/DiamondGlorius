import { Container } from 'react-bootstrap'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function IndexWrapper({ children, ...props }) {
	return (
		<div className='main__bg'>
			<Header />
			<Container fluid style={{ maxWidth: '1400px' }}>
				{children}
			</Container>
			<Footer />
		</div>
	)
}
