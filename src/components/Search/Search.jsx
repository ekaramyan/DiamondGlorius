import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Spinner } from 'react-bootstrap'
import styles from './Search.module.css'
import AdvanceSearch from '../AdvanceSearch/AdvanceSearch'
import Other from '../Other/Other'
import CircleButton from '../UI/CircleButton'
import FromTo from '../UI/FromTo'
import { GenderNeuter } from 'react-bootstrap-icons'
import FilterSelect from '../UI/FilterSelect'
import useSearchDiamonds from '@/hooks/useSearchDiamonds'
import { getMenuTabs, getConditionTypes, getOtherData } from '@/initialFormData'
import { setFilters } from '../../redux/actions'

export default function Search({ diamonds }) {
	const formData = useSelector(state => state.filters)

	const dispatch = useDispatch()
	const { searchDiamonds, loading, error, success } = useSearchDiamonds()
	const router = useRouter()

	// useEffect(() => {
	// 	dispatch(setFilters(formData))
	// }, [formData, dispatch])

	const handleSetFilters = formData => {
		dispatch(setFilters(formData))
	}

	const handleUpdateFormData = (key, updatedData) => {
		const newFormData = {
			...formData,
			[key]: updatedData,
		}
		handleSetFilters(newFormData)
	}

	const handleInputChange = event => {
		const { name, value } = event.target
		const newFormData = {
			...formData,
			[name]: value,
		}
		handleSetFilters(newFormData)
	}

	const handleSearchClick = () => {
		searchDiamonds(formData)
		success && router.push('/diamonds')
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
						{loading ? (
							<Spinner
								as='span'
								animation='border'
								size='sm'
								role='status'
								aria-hidden='true'
							/>
						) : (
							<GenderNeuter
								color='#e0e0e0'
								width={30}
								height={30}
								style={{ transform: 'rotate(-30deg)' }}
							/>
						)}
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
					<button>+</button>
					<button>-</button>
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
				{/* <FromTo
					title={'RAP DIS (%)'}
					formData={formData}
					setFormData={handleSetFilters}
					objectKey={'disc'}
				/> */}
				<FromTo
					title={'Price/Carat USD'}
					formData={formData}
					setFormData={handleSetFilters}
					objectKey={'pricePerCarat'}
				/>
			</div>

			<Col>
				<Row md={4}>
					<FilterSelect
						data={conditionTypes}
						handleUpdateFormData={handleUpdateFormData}
						formData={formData}
					/>
				</Row>
			</Col>
			<AdvanceSearch formData={formData} setFormData={handleSetFilters} />
			<Other
				otherData={otherData}
				handleUpdateFormData={handleUpdateFormData}
				formData={formData}
			/>
		</>
	)
}
