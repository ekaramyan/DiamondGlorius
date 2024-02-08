import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from '../Header/Header.module.css'

export default function Header() {
	return (
		<>
			<div className={styles.Header}>
				<div className={styles.HeaderContainer}>
					<div className={styles.Header__logo}>
						<img src="https://www.gloriousdiamonds.net/application/public/images/new_design/Logo-1.png" alt="headerLogo" />
					</div>

					<h1 className={styles.header__title}>Glorius Diamond</h1>
					<a href="#" className={styles.header__link}> <img src="https://www.gloriousdiamonds.net/application/public/images/2020/ic_ios.png" alt="AppStore" /> </a>
					<a href="#" className={styles.header__link}> <img src="https://www.gloriousdiamonds.net/application/public/images/2020/ic_andriod.png" alt="GooglePlay" /> </a>
				</div>
			</div>
		</>
	)
}
