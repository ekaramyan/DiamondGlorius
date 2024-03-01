'use client'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Cart, Moon, Sun, CardHeading, Table } from 'react-bootstrap-icons'
import { toggleTheme } from '@/redux/actions'
import { toggleViewMode } from '@/redux/actions'
import round from '@/assets/img/icon-2.webp'

export default function Header({ showCart }) {
	const router = useRouter()
	const theme = useSelector(state => state.theme)
	const viewMode = useSelector(state => state.viewMode)
	const dispatch = useDispatch()
	return (
		<>
			<div className='Header'>
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
						<div className='Header__logo'>
							<Image src={round.src} alt='logo' width={40} height={40} />
							<h1 className='header__title'>Diamonds</h1>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 15,
							}}
						>
							{router.route === '/diamonds' && (
								<button
									onClick={() => dispatch(toggleViewMode())}
									className='header__link'
								>
									{viewMode === 'cards' ? (
										<Table width={20} height={25} />
									) : (
										<CardHeading width={20} height={25} />
									)}
								</button>
							)}
							<button
								onClick={() => dispatch(toggleTheme())}
								className='header__link'
							>
								{theme === 'dark' ? (
									<Sun width={20} height={25} />
								) : (
									<Moon width={20} height={25} />
								)}
							</button>
							<button onClick={showCart} className='header__link'>
								<Cart color={'#e0e0e0'} width={30} height={25} />
							</button>
						</div>
					</div>
				</Container>
			</div>
		</>
	)
}
