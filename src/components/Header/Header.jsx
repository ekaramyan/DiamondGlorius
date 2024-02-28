import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '@/redux/actions'
import { Cart, Moon, Sun } from 'react-bootstrap-icons'
import styles from './Header.module.css'
import round from '@/assets/img/icon-2.webp'

export default function Header({ showCart }) {
	const theme = useSelector(state => state.theme)
	const dispatch = useDispatch()
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
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							width: '100%',
						}}
					>
						<div className={styles.Header__logo}>
							<Image src={round.src} width={40} height={40} />
							<h1 className={styles.header__title}>Diamonds</h1>
						</div>
						<div>
							<button
								onClick={() => dispatch(toggleTheme())}
								className={styles.header__link}
							>
								{theme === 'dark' ? (
									<Moon width={20} height={25} />
								) : (
									<Sun width={20} height={25} />
								)}
							</button>
							<button onClick={showCart} className={styles.header__link}>
								<Cart color={'#e0e0e0'} width={30} height={25} />
							</button>
						</div>
					</div>
				</Container>
			</div>
		</>
	)
}
