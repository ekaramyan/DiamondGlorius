import { Row, Col, Container } from 'react-bootstrap'
import styles from './Search.module.css'
import AdvanceSearch from '../AdvanceSearch/AdvanceSearch'
import Other from '../Other/Other'
import CircleButton from '../UI/CircleButton'
import FromTo from '../UI/FromTo'
import FilterButtons from '../UI/FilterButtons'
import round from '@/assets/img/round.png'

export default function Search({ diamonds }) {
	console.log(diamonds)
	const menuTabs = [
		{
			id: 1,
			title: 'size group',
			buttons: [{ text: '30s' }, { text: '' }, { text: '' }],
		},
		{
			id: 2,
			title: 'White | fancy',
			buttons: [{ title: 'All' }, { text: '' }, { text: '' }],
		},
		{
			id: 3,
			title: 'clarity',
			buttons: [{ title: 'All' }, ...diamonds.clarity_types],
		},
		{
			id: 4,
			title: 'FL',
			buttons: [{ title: 'All' }, ...diamonds.fluro_types],
		},
		{
			id: 5,
			title: 'color shade',
			buttons: [{ title: 'All' }, ...diamonds.color_shades],
		},
		{
			id: 6,
			title: 'LAB',
			buttons: [{ title: 'All' }, ...diamonds.labs],
		},
	]

	const diamondShapes = diamonds?.shapes

	return (
		<div className='main__bg'>
			<Container fluid style={{ maxWidth: '1400px' }}>
				<Row>
					<Col md={4}>
						<label>
							<input
								className={styles.search__input}
								placeholder='Поиск'
								type='search'
							/>
						</label>
					</Col>
				</Row>

				<Row>
					<Col md={4} style={{ width: '100%', display: 'flex', gap: 5 }}>
						{diamondShapes.map(diamondShape => (
							<CircleButton
								key={diamondShape.id}
								text={diamondShape.title}
								imageSource={diamondShape.imageSource}
							/>
						))}
					</Col>
				</Row>

				<Col md={4} style={{ width: '100%' }}>
					<div
						style={{
							display: 'flex',
							gap: 25,
							alignItems: 'center',
						}}
					>
						<p className={styles.Title}>Carat</p>
						<div className={styles.carat__wrapper_input}>
							<input
								className={styles.carat__wrapper_inputItem}
								placeholder='От'
								type='text'
							/>
							<input
								className={styles.carat__wrapper_inputItem}
								placeholder='До'
								type='text'
							/>
						</div>
					</div>

					{menuTabs.map((tab, id) => (
						<div
							key={id}
							style={{
								display: 'flex',
								gap: 25,
								alignItems: 'center',
							}}
						>
							<p className={styles.Title} style={{ width: '11%' }}>
								{tab.title}
							</p>
							<FilterButtons buttons={tab.buttons} />
						</div>
					))}
				</Col>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'start',
						justifyContent: 'center',
						marginTop: 35,
					}}
				>
					<FromTo title={'RAP DIS (%)'} />
					<FromTo title={'Price/Carat USD'} />
				</div>

				<Row>
					<Col md={{ span: 2, offset: 2 }}>
						<div className={styles.cutItem__wrapper}>
							<label className={styles.cutItem__label}>
								3 E X
								<input className={styles.cutItem__input} type='checkbox' />
							</label>
							<label className={styles.cutItem2__label}>
								2 E X
								<input className={styles.cutItem2__input} type='checkbox' />
							</label>
							<label className={styles.cutItem3__label}>
								3 V G +
								<input className={styles.cutItem3__input} type='checkbox' />
							</label>
							<label className={styles.noBgm__label}>
								NO BGM
								<input className={styles.noBgm__input} type='checkbox' />
							</label>
						</div>
					</Col>
				</Row>

				<Row>
					<Col md={2}>
						<div className={styles.cut__title}>CUT</div>
						<div className={styles.cut__title}>POLISH</div>
						<div className={styles.cut__title}>SYMMETRY</div>
					</Col>
					<Col md={2}>
						<label className={styles.cut__label}>
							EXCELLENT
							<input className={styles.cut__input} type='checkbox' />
						</label>
						<label className={styles.cut__label}>
							EXCELLENT
							<input className={styles.cut__input} type='checkbox' />
						</label>
						<label className={styles.cut__label}>
							EXCELLENT
							<input className={styles.cut__input} type='checkbox' />
						</label>
					</Col>
					<Col md={2}>
						<div className={styles.cutItem1__title}>
							BLACK INCLUSION IN TABLE
						</div>
						<div className={styles.cutItem2__title}>
							BLACK INCLUSION IN CROWN
						</div>
						<div className={styles.cutItem3__title}>
							WHITE INCLUSION IN TABLE
						</div>
						<div className={styles.cutItem4__title}>
							WHITE INCLUSION IN CROWN
						</div>
						<div className={styles.cutItem5__title}>MILKY</div>
					</Col>

					<Col md={2}>
						<label className={styles.cutItem1__label}>
							ALL
							<input className={styles.cutItem1__input} type='checkbox' />
						</label>

						<label className={styles.cutItem1__label}>
							ALL
							<input className={styles.cutItem1__input} type='checkbox' />
						</label>
						<label className={styles.cutItem1__label}>
							ALL
							<input className={styles.cutItem1__input} type='checkbox' />
						</label>
						<label className={styles.cutItem1__label}>
							ALL
							<input className={styles.cutItem1__input} type='checkbox' />
						</label>
						<label className={styles.cutItem1__label}>
							ALL
							<input className={styles.cutItem1__input} type='checkbox' />
						</label>
					</Col>
				</Row>
				<AdvanceSearch />
				<Other />
			</Container>
		</div>
	)
}
