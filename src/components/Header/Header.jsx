import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { Cart } from 'react-bootstrap-icons'
import styles from './Header.module.css'
import round from '@/assets/img/icon-2.png'

export default function Header({ showCart }) {
	return (
		<>
			<div className={styles.Header}>
				<Container
					fluid
					style={{
						maxWidth: '1400px',
						paddingBottom: 10,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div className={styles.Header__logo}>
						<Image src={round.src} width={40} height={40} />
						<h1 className={styles.header__title}>Diamonds</h1>
					</div>

					<button onClick={showCart} className={styles.header__link}>
						<Cart color={'#e0e0e0'} width={30} height={25} />
					</button>
				</Container>
			</div>
		</>
	)
}
