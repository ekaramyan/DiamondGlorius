import React from 'react'
import styles from '../Header/Header.module.css'
import { Row, Col, Container } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Header() {
	return (
		<>

			<Container fluid>
				<Row>
					<Col>
					<div className={styles.Header}>
						<Container>
							<div className={styles.Header__logo}>
								<img src="https://www.gloriousdiamonds.net/application/public/images/new_design/Logo-1.png" alt="headerLogo" />
							</div>

							<h1 className={styles.header__title}>Glorius Diamond</h1>
							<a href="#" className={styles.header__link}><img src="https://www.gloriousdiamonds.net/application/public/images/2020/ic_ios.png" alt="" /></a>
							<a href="#" className={styles.header__link}><img src="https://www.gloriousdiamonds.net/application/public/images/2020/ic_andriod.png" alt="" /></a>
							<a href="#" className={styles.header__link}><img src="https://www.gloriousdiamonds.net/application/public/images/2020/ic_login.png" alt="" /></a>
							<a href="#" className={styles.header__link}><img src="https://www.gloriousdiamonds.net/application/public/images/2020/ic_checkprice.png" alt="" /></a>
						</Container>
					</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}
