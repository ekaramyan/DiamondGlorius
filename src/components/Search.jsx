import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Spinner } from 'react-bootstrap'
import { GenderNeuter, ArrowCounterclockwise } from 'react-bootstrap-icons'
import useSearchDiamonds from '@/hooks/useSearchDiamonds'
import {
	initialFormData,
	getMenuTabs,
	getConditionTypes,
	getOtherData,
	diamondShapesImg,
} from '@/initialFormData'
import { setFilters } from '../redux/actions'

import AdvanceSearch from './AdvanceSearch'
import Other from './Other'
import FromTo from './UI/FromTo'
import CircleButton from './UI/CircleButton'
import FilterSelect from './UI/FilterSelect'

const CaratFilterList = dynamic(() => import('./UI/CaratFilterList'), {
	ssr: false,
})

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
	}

	const handleResetFormData = () => {
		handleSetFilters(initialFormData)
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
							className='search__input'
							placeholder='Search'
							type='search'
							name='stno'
							value={formData.stno}
							onChange={handleInputChange}
						/>
					</label>
					<Button
						className='button__primary'
						variant='primary'
						onClick={handleSearchClick}
					>
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
					<Button
						className='button__primary'
						variant='primary'
						onClick={handleResetFormData}
					>
						<ArrowCounterclockwise color='#e0e0e0' width={30} height={30} />
					</Button>
				</div>
			</Row>

			<Row>
				<Col md={4} style={{ width: '100%', display: 'flex', gap: 5 }}>
					{diamondShapes.map((diamondShape, index) => (
						<CircleButton
							key={diamondShape.id}
							shape={diamondShape}
							imageSource={diamondShapesImg[index].img}
							updateFormData={handleUpdateFormData}
							shapeIds={formData.shape_ids}
						/>
					))}
				</Col>
			</Row>

			<Col md={4} style={{ width: '100%' }}>
				<CaratFilterList
					carats={formData.carat}
					formData={formData}
					setFilters={handleSetFilters}
					objectKey={'carat'}
				/>
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
