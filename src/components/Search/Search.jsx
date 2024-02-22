import { useState } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import styles from './Search.module.css'
import AdvanceSearch from '../AdvanceSearch/AdvanceSearch'
import Other from '../Other/Other'
import CircleButton from '../UI/CircleButton'
import FromTo from '../UI/FromTo'
import { GenderNeuter } from 'react-bootstrap-icons'
import FilterSelect from '../UI/FilterSelect'
import useSearchDiamonds from '@/hooks/useSearchDiamonds'
import {
	initialFormData,
	getMenuTabs,
	getConditionTypes,
	getOtherData,
} from '@/initialFormData'

export default function Search({ diamonds }) {
	const [formData, setFormData] = useState(initialFormData)
	const { searchDiamonds, loading, error, success } = useSearchDiamonds()

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

	const handleSearchClick = () => {
		searchDiamonds(formData)
	}

	const menuTabs = getMenuTabs(diamonds)
	const conditionTypes = getConditionTypes(diamonds)
	const otherData = getOtherData(diamonds)
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
					<Button variant='primary' onClick={handleSearchClick}>
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
