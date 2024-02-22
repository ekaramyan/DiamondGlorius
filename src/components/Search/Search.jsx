import { useState } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import styles from './Search.module.css'
import AdvanceSearch from '../AdvanceSearch/AdvanceSearch'
import Other from '../Other/Other'
import CircleButton from '../UI/CircleButton'
import FromTo from '../UI/FromTo'
import { GenderNeuter } from 'react-bootstrap-icons'
import FilterSelect from '../UI/FilterSelect'

export default function Search({ diamonds }) {
	const [formData, setFormData] = useState({
		shape_ids: [],
		color_id: [],
		stno: null,
		clarity_id: [],
		cert_id: [],
		cut_type_id: [],
		finish_type_id: [],
		sym_type_id: [],
		fluro_type_id: [],
		ec_type_id: [],
		oppv_type_id: [],
		opta_crown_id: [],
		opta_type_id: [],
		color_shade_id: [],
		milky_type_id: [],
		bc_type_id: [],
		bit_type_id: [],
		wc_type_id: [],
		wt_type_id: [],
		price: {
			min: null,
			max: null,
		},
		carat: [
			{
				min: null,
				max: null,
			},
		],
		td: {
			min: null,
			max: null,
		},
		tab: {
			min: null,
			max: null,
		},
		pvAng: {
			min: null,
			max: null,
		},
		crAng: {
			min: null,
			max: null,
		},
		ratio: {
			min: null,
			max: null,
		},
		pricePerCarat: {
			min: null,
			max: null,
		},
		disc: {
			min: null,
			max: null,
		},
	})

	const handleUpdateFormData = (key, updatedData) => {
		console.log(key, updatedData)
		setFormData(prevFormData => ({
			...prevFormData,
			[key]: updatedData,
		}))
		console.log(formData)
	}

	const handleInputChange = event => {
		const { name, value } = event.target
		console.log(name, value)
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value,
		}))
	}

	const menuTabs = [
		// {
		// 	id: 1,
		// 	title: 'size group',
		// 	buttons: [{ text: '30s' }, { text: '' }, { text: '' }],
		// },
		{
			id: 2,
			title: 'White | fancy',
			buttons: [{ title: 'All' }, ...diamonds.colors],
			key: 'color_id',
		},
		{
			id: 3,
			title: 'clarity',
			buttons: [{ title: 'All' }, ...diamonds.clarity_types],
			key: 'clarity_id',
		},
		{
			id: 4,
			title: 'FL',
			buttons: [{ title: 'All' }, ...diamonds.fluro_types],
			key: 'fluro_type_id',
		},
		{
			id: 5,
			title: 'color shade',
			buttons: [{ title: 'All' }, ...diamonds.color_shades],
			key: 'color_shade_id',
		},
		{
			id: 6,
			title: 'LAB',
			buttons: [{ title: 'All' }, ...diamonds.labs],
			key: 'cert_id',
		},
	]

	const conditionTypes = [
		{
			id: 1,
			title: 'cut',
			buttons: [...diamonds.cut_types],
			key: 'cut_type_id',
		},
		{
			id: 2,
			title: 'polish',
			buttons: [...diamonds.finish_types],
			key: 'finish_type_id',
		},
		{
			id: 3,
			title: 'symmetry',
			buttons: [...diamonds.symmetry_types],
			key: 'sym_type_id',
		},
		{
			id: 4,
			title: 'BLACK INCLUSION IN TABLE',
			buttons: [{ title: 'All' }, ...diamonds.bit_types],
			key: 'bit_type_id',
		},
		{
			id: 5,
			title: 'BLACK INCLUSION IN CROWN',
			buttons: [{ title: 'All' }, ...diamonds.bic_types],
			key: 'bc_type_id',
		},
		{
			id: 6,
			title: 'WHITE INCLUSION IN TABLE',
			buttons: [{ title: 'All' }, ...diamonds.wit_types],
			key: 'wt_type_id',
		},
		{
			id: 7,
			title: 'WHITE INCLUSION IN CROWN',
			buttons: [{ title: 'All' }, ...diamonds.wic_types],
			key: 'wc_type_id',
		},
		{
			id: 8,
			title: 'MILKY',
			buttons: [{ title: 'All' }, ...diamonds.milky_types],
			key: 'milky_type_id',
		},
	]

	const otherData = [
		{
			id: 1,
			title: 'open table',
			buttons: [{ title: 'All' }, ...diamonds.open_table_types],
			key: 'opta_type_id',
		},
		{
			id: 2,
			title: 'open crown',
			buttons: [{ title: 'All' }, ...diamonds.open_crown_types],
			key: 'opta_crown_id',
		},
		{
			id: 3,
			title: 'open pavilion',
			buttons: [{ title: 'All' }, ...diamonds.open_pav_types],
			key: 'oppv_type_id',
		},
		{
			id: 4,
			title: 'eye clean',
			buttons: [{ title: 'All' }, ...diamonds.eye_clean_types],
			key: 'ec_type_id',
		},
	]

	const diamondShapes = diamonds?.shapes

	return (
		<>
			<Row>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 10,
						marginLeft: 2,
						marginTop: 10,
					}}
				>
					<label>
						<input
							className={styles.search__input}
							placeholder='Search'
							type='search'
							name='stno'
							value={formData.stno}
							onChange={handleInputChange}
						/>
					</label>
					<Button variant='primary'>
						<GenderNeuter
							color='#e0e0e0'
							width={30}
							height={30}
							style={{ transform: 'rotate(-30deg)' }}
						/>
					</Button>
				</div>
			</Row>

			<Row>
				<Col md={4} style={{ width: '100%', display: 'flex', gap: 5 }}>
					{diamondShapes.map(diamondShape => (
						<CircleButton
							key={diamondShape.id}
							shape={diamondShape}
							imageSource={diamondShape.imageSource}
							updateFormData={handleUpdateFormData}
							shapeIds={formData.shape_ids}
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
							placeholder='From'
							type='text'
						/>
						<input
							className={styles.carat__wrapper_inputItem}
							placeholder='To'
							type='text'
						/>
					</div>
				</div>
				<FilterSelect
					data={menuTabs}
					handleUpdateFormData={handleUpdateFormData}
					formData={formData}
				/>
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
				<FromTo
					title={'RAP DIS (%)'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'disc'}
				/>
				<FromTo
					title={'Price/Carat USD'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'pricePerCarat'}
				/>
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

			<Col>
				<Row md={4}>
					<FilterSelect
						data={conditionTypes}
						handleUpdateFormData={handleUpdateFormData}
						formData={formData}
					/>
				</Row>
			</Col>
			<AdvanceSearch formData={formData} setFormData={setFormData} />
			<Other
				otherData={otherData}
				handleUpdateFormData={handleUpdateFormData}
				formData={formData}
			/>
		</>
	)
}
