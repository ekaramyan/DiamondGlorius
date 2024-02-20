import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'
import cart from '@/assets/img/cart.svg'
import styles from './Header.module.css'
import round from '@/assets/img/round.png'

export default function Header() {
	return (
		<>
			<div className={styles.Header}>
				<Container fluid style={{ maxWidth: '1400px', paddingBottom: 10 }}>
					<Row>
						<Col>
							<>
								<div className={styles.Header__logo}>
									<Image src={round.src} width={30} height={30} />
								</div>

								<h1 className={styles.header__title}>Diamonds</h1>

								<a href='#' className={styles.header__link}>
									<Image src={cart.src} width={25} height={25} />
								</a>
							</>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
