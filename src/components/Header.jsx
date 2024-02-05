import React from 'react'
import Container from 'react-bootstrap/Container'

export default function Header() {
	return (
		<>
			<Container>
				<div class='row'>
					<div class='col-md-1'>
						<div class='header__img'>
							<a href='#'>
								<img
									src='https://www.gloriousdiamonds.net/application/public/images/new_design/Logo-1.png'
									alt=''
								/>
							</a>
						</div>
					</div>
					<div class='col-md-4'>
						<h1 class='header__title'>Бриллианты</h1>
						<h3 class='header__subtitle'>Настоящие природные алмазы</h3>
					</div>
					<div class='col-md-6'>
						<div class='link__wrapper'>
							<a href='#' class='link__app-store'>
								<img
									src='https://www.gloriousdiamonds.net/application/public/images/2020/ic_ios.png'
									alt=''
								/>
							</a>
							<a href='#' class='link__google-play'>
								<img
									src='https://www.gloriousdiamonds.net/application/public/images/2020/ic_andriod.png'
									alt=''
								/>
							</a>
							<a href='#' class='link__app-store'>
								<img
									src='https://www.gloriousdiamonds.net/application/public/images/2020/ic_login.png'
									alt=''
								/>
							</a>
							<a href='#' class='link__google-play'>
								<img
									src='https://www.gloriousdiamonds.net/application/public/images/2020/ic_checkprice.png'
									alt=''
								/>
							</a>
						</div>
					</div>
					<div class='col-md-1'>
						<div class='basket'>
							<button class='basket__button'>
								<img src='icons/basket.svg' alt='' class='basket__img' />
							</button>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
